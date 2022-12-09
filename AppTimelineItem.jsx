//// [IMPORTS] ////
import * as React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Modal,
  Pressable,
  Text,
  View,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function TimeLineItem({
  itemData,
  isTextEnlarged,
  inactive,
  touchDetected,
  warn,
}) {
  //// [MODAL: State to control modal visibility] ////
  const [modalVisible, setModalVisible] = React.useState(false);
  
  //// [SCROLL: State to monitor scrolled cards] ////
  const [scrolled, setScrolled] = React.useState(0);

  // [cardRef for scrolling cards]
  let cardRef = React.useRef(null);

  //// [Function to monitor scrolled cards]
  const handleScrollEvent = () => {
    let newScrolled = scrolled + 1;
    setScrolled(newScrolled);
    touchDetected();
  };

  //// [SCROLL TO IMAGE: Function for image icon onPress] ////
  const downButtonHandler = () => {
    cardRef.current.scrollToEnd({ animated: true });
    handleScrollEvent();
  };
  
  //// [MODAL: Functions for opening and closing modal] ////
  const handleModalOpen = () => {
    setModalVisible(true);
    handleScrollEvent();
  };
  
  const handleModalClose = () => {
    setModalVisible(!modalVisible);
    handleScrollEvent();
  };

  //// [WARNING TIMEOUT] ////
  React.useEffect(() => {
    if (warn && modalVisible) {
      setModalVisible(false);
    }
  }), [warn];

  //// [INACTIVITY TIMEOUT] ////
  React.useEffect(() => {
    if (inactive && scrolled) {
      cardRef.current.scrollTo({
        y: 0,
        animated: true,
      });
      setScrolled(0);
    };
    if (modalVisible) {
      setModalVisible(false);
    }
  },[inactive]);

  //// [COMPONENT] ////
  return (
    <View style={styles.itemWrapper}>

      {/* [CIRCLE DISPLAYING THE YEAR] */}
      <View>
        <View style={styles.circleIcon}>
          <Text style={isTextEnlarged ? styles.circleYearEnlarged : styles.circleYearFont}>
            {itemData.year}
          </Text>
        </View>
      </View>

      {/* [CARD DISPLAYING INFORMATION ABOUT THE EVENT] */}
      <ScrollView
        style={styles.itemCard}
        ref={cardRef}
        scrollEventThrottle={16}
        onScrollEndDrag={handleScrollEvent}
        scrolled={scrolled}
      >

        {/* [CARD TITLE] */}
        <View style={styles.itemCardTitleBox}>
          <Text
            style={[isTextEnlarged ? styles.itemCardTitleEnlarged : styles.itemCardTitleFont]}>
              {itemData.location}
          </Text>
        </View>
        
        {/* [CARD IMAGE ICON IF THERE IS MEDIA] */}
        {itemData.media ? 
          <Pressable
            style={styles.mediaIcon}
            onPress={downButtonHandler}
          >
            <MaterialIcons name='image' size={32} color='black' />
          </Pressable>
        :
          <View />
        }

        {/* [CARD SUBTITLE] */}
        <View style={styles.itemCardSubTitleBox}>
          <Text
            style={[
              styles.itemCardMarginBox,
              isTextEnlarged ? styles.itemCardSubTitleEnlarged : styles.itemCardSubTitleFont
            ]}
          >
            {itemData.date}
          </Text>
        </View>
        
        {/* [CARD CONTENT] */}
        <Text style={[
          styles.itemCardMarginBox,
          isTextEnlarged ? styles.itemCardDescriptionEnlarged : styles.itemCardDescriptionFont
          ]}
        >
          {itemData.description}
        </Text>
        
        {/* [CARD MEDIA / IMAGES] */}
        {itemData.media ? 
          <View style={styles.itemCardMedia}>
              <Image
                style={
                  { flex: 1, height: undefined, width: undefined, marginVertical: 10, }
                }
                source={itemData.media}
                resizeMethod='auto'
                resizeMode='contain'
              />
            
            {/* [BUTTON TO OPEN MODAL], this could possibly be wrapped around the image instead of a button */}
            <Pressable
              style={[styles.modalButton, styles.modalButtonOpen]}
              onPress={handleModalOpen}
            >
              <Text style={isTextEnlarged ? styles. modalButtonTextEnlarged: styles.modalButtonTextFont}>
                View Larger Image
              </Text>
            </Pressable>

            {/* [MODAL TO VIEW LARGER IMAGE] */}
            <Modal
              animationType='slide'
              // presentationStyle='fullScreen'
              visible={modalVisible}
              onRequestClose={() => {
                setModalVisible(!modalVisible);
                touchDetected();
              }}
            >
              <SafeAreaView style={{ flex: 0, backgroundColor: '#191109', }} />
              <SafeAreaView style={{ flex: 1, backgroundColor: '#191109', }}>
                <View style={styles.modalMedia}>
                  <Image
                    style={{ flex: 1, height: undefined, width: undefined, }}
                    source={itemData.media}
                    resizeMethod='auto'
                    resizeMode='contain'
                  />
                </View>

                {itemData.alt ? 
                  <View style={styles.modalAltBox}>
                    <Text style={isTextEnlarged ? styles.modalAltTextEnlarged : styles.modalAltTextFont}>
                      {itemData.alt}
                    </Text>
                  </View>
                :
                  <View />
                }

                <Pressable
                  style={[styles.modalButton, styles.modalButtonClose]}
                  onPress={handleModalClose}
                  >
                  <Text
                    style={isTextEnlarged ? styles. modalButtonTextEnlarged: styles.modalButtonTextFont}
                  >
                    Go Back To The Timeline
                  </Text>
                </Pressable>
              </SafeAreaView>
            </Modal>
          </View>
        :
          <View />
        }
      </ScrollView>

    </View>
  )
};

//// [ITEM STYLES] ////
const styles = StyleSheet.create({
  itemWrapper: {
    flexDirection: 'column',
    marginBottom: 10,
    marginLeft: 40, // these margins keep the FlatList from staring/ending at the edges
    marginRight: 40, // these margins keep the FlatList from staring/ending at the edges
    marginTop: 0, 
    width: 500,
  },
  circleIcon: {
    backgroundColor: '#322312', // brownMediumDark
    borderColor: '#4A2711', // brownAccent
    borderRadius: 5,
    borderRadius: 100,
    borderStyle: 'solid',
    borderWidth: 1,
    height: 80,
    justifyContent: 'center',
    marginTop: 0,
    marginBottom: 5,
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingLeft: 2,
    shadowColor: '#171717',
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    width: 80,
  },
  circleYearFont: {
    color: '#E8DCB8',
    fontFamily: 'Sancreek_400Regular',
    fontSize: 24,
    textAlign: 'center',
  },
  circleYearEnlarged: {
    color: '#E8DCB8',
    fontFamily: 'System',
    fontSize: 24,
    fontWeight: '500',
    textAlign: 'center',
  },
  itemCard: {
    backgroundColor: '#E8DCB8',
    borderColor: '#191109', // brownDark
    borderRadius: 20,
    borderStyle: 'solid',
    borderWidth: 1,
    flex: 1,
    height: 1,
    overflow: 'scroll',
    padding: 20,
    shadowColor: '#171717',
    shadowOffset: {
      width: 10,
      height: 10
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    width: 500,
  },
  itemCardMarginBox: {
    marginBottom: 10,
    marginTop: 10,
  },
  mediaIcon: {
    position: 'absolute',
    right: 0,
    top: 0,
  },
  itemCardTitleBox: {
    minHeight: 120,
    maxWidth: 420,
  },
  itemCardTitleFont: {
    fontFamily: 'SpecialElite_400Regular',
    fontSize: 30,
  },
  itemCardTitleEnlarged: {
    fontFamily: 'System',
    fontSize: 35,
    fontWeight: 'bold',
  },
  itemCardSubTitleBox: {
    minHeight: 50,
    maxWidth: 420,
  },
  itemCardSubTitleFont: {
    fontFamily: 'SpecialElite_400Regular',
    fontSize: 26,
    // height: 45,
    marginBottom: 15,
    marginTop: 5,
    // textAlign: 'right'
  },
  itemCardSubTitleEnlarged: {
    fontFamily: 'System',
    fontSize: 30,
    fontWeight: 'bold',
    height: 45,
    marginBottom: 5,
    marginTop: 5,
    // textAlign: 'right'
  },
  itemCardDescriptionFont: {
    fontFamily: 'SpecialElite_400Regular',
    fontSize: 24,
    lineHeight: 25,
    letterSpacing: .75,
    paddingTop: 5,
    marginBottom: 5,
  },
  itemCardDescriptionEnlarged: {
    fontFamily: 'System',
    fontSize: 30,
    marginBottom: 5,
    marginTop: 5,
  },
  itemCardMedia: {
    flex: 1,
    marginVertical: 20,
    minWidth: 450,
    minHeight: 450,
  },
  itemCardBottomSpace: {
    height: 20,
  },
  modalMedia: {
    backgroundColor: '#191109',
    flex: 1,
    margin: 20,
    minHeight: 450,
    minWidth: 450,
  },
  modalAltBox: {
    alignSelf: 'center',
    alignItems: 'center',
    minHeight: 75,
    backgroundColor: '#E8DCB8',
    borderColor: '#191109', // brownDark
    borderRadius: 10,
    borderStyle: 'solid',
    borderWidth: 1,
    justifyContent: 'center',
    margin: 10,
    padding: 20,
  },
  modalAltTextFont: {
    fontFamily: 'SpecialElite_400Regular',
    fontSize: 20,
    textAlign: 'center',
  },
  modalAltTextEnlarged: {
    fontFamily: 'System',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalButton: {
    alignSelf: 'center',
    backgroundColor: '#FAB05A',
    borderRadius: 20,
    elevation: 2,
    marginBottom: 20,
    padding: 10,
  },
  modalButtonOpen: {
    width: 400,
  },
  modalButtonClose: {
    width: 500,
  },
  modalButtonTextFont: {
    fontFamily: 'SpecialElite_400Regular',
    fontSize: 20,
    textAlign: 'center',
  },
  modalButtonTextEnlarged: {
    fontFamily: 'System',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
