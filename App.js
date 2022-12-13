//// [IMPORTS] ////
import * as React from 'react';
import {
  FlatList,
  ImageBackground,
  Modal,
  PanResponder,
  Pressable,
  SafeAreaView,
  ScrollView,
  Switch,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import * as SplashScreen from 'expo-splash-screen';
import { MaterialIcons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font'; 
import { SpecialElite_400Regular } from '@expo-google-fonts/special-elite';
import { Sancreek_400Regular } from '@expo-google-fonts/sancreek';

import TimeLineItem from './AppTimelineItem';
import BACKGROUND_IMAGE from './assets/images/wood-board-texture-brown.jpeg';
import DECADES from './assets/data/DECADES';
import DATA from './assets/data/DATA';

//// [SPLASH SCREEN] ////
SplashScreen.preventAutoHideAsync();

export default function App() {
  //// [TOPBAR: Text values]
  const TITLE = "Timeline of the American Old West";

  //// [DECADES SCROLL BAR] ////
  // [Ref: flatList ref]
  const timeLineRef = React.useRef(null);
  
  // [scrollToDecade: onPress will scroll the flatList to the corresponding card index]
  const scrollToDecade = (cardIndex) => {
    timeLineRef.current.scrollToIndex({
      animated: true,
      index: parseInt(cardIndex),
      viewPosition: 0,
      viewOffset: 0,
    });
    touchDetected();
  };
    
  //// [FLATLIST COMPONENTS] ////
  // [flatListKeyExtractor: keyExtractor function]
  const flatListKeyExtractor = ( index, item ) => index + item;

  // [flatListRenderItem: component render function]
  const flatListRenderItem = ({ item, index }) => {
    return(
        <TimeLineItem
          itemData={item}
          isTextEnlarged={isTextEnlarged}
          inactive={inactive}
          touchDetected={touchDetected}
          warn={warn}
        />
    )
  };

  // [flatListSeparatorRender: separator component render function]
  const flatListSeparatorRender = (({ highlighted }) => (
    <View
      style={[
        styles.timelineSeparator,
        // highlighted && { marginLeft: 0 }
      ]}
    />
  ));

  //// [BOTTOMBAR: Text values] ////
  const COPYRIGHT = "2022 Pony Express Station Museum, Gothenberg, NE";
    
  //// [ACCESSIBILITY: Functions to operate 'easier to read' text switch] ////
  // [State: determines which text/font mode the app is currently using]
  const [isTextEnlarged, setIsTextEnlarged] = React.useState(false);

  // [handleEnlargeText: changes the text/font mode]
  const handleEnlargeText = () => {
    setIsTextEnlarged(!isTextEnlarged);
    touchDetected();
  };

  //// [INACTIVITY TIMEOUT] ////
  // [State: determines whether or not app is inactive]
  const [inactive, setInactive] = React.useState(true);
  
  // [State: ontrols/closes card fullscreen modal to display warning modal (passed down)]
  const [warn, setWarn] = React.useState(false);
  
  // [State: ontrols state of warning modal]
  const [warningVisible, setWarningVisible] = React.useState(false);
  
  // [Refs: for setTimeout()s to make sure that they are cleared properly]
  const inactivityWarningTimer = React.useRef(false);
  const inactivityLogoutTimer = React.useRef(false);
  
  // [panResponder: acts as a touch sensor]
  const panResponder = React.useRef(
    PanResponder.create({
      onMoveShouldSetPanResponderCapture: () => {
        touchDetected();
        return false
      }
    })
  ).current;
    
  // [touchDetected: function for whenever a button is pressed or a panResponder is detected]
  const touchDetected = () => {
    if (inactive) {
      setInactive(false);
    };
    if (warningVisible) {
      setWarningVisible(false);
    };
    if (warn) {
      setWarn(false);
    };
    resetInactivityWarning();
    console.log('touch detected');
  };
    
  // [resetInactivityWarning: setTimeout and clear setTimeout]
  const resetInactivityWarning = () => {
    clearTimeout(inactivityWarningTimer.current);
    clearTimeout(inactivityLogoutTimer.current);
    inactivityWarningTimer.current = setTimeout(() => {
      console.log('warning timeout complete');
      setWarn(true);
      setWarningVisible(true);
    }, 540000);
    
    inactivityLogoutTimer.current = setTimeout(() => {
      console.log('logout timeout complete');
      timeLineRef.current.scrollToIndex({
        animated: true,
        index: 0,
        viewPosition: 0,
        viewOffset: 0,
      });
      setWarn(false);
      setWarningVisible(false);
      setInactive(true);
    }, 600000)
  };
    
  // [handleWarningModalClose: function to close warning modal onPress]
  const handleWarningModalClose = () => {
    setWarningVisible(false);
    touchDetected();
  };
    
  // [Effect: clears the setTimeout()s on unmount to prevent memory leaks]
  React.useEffect(() => {
    resetInactivityWarning();
  }, []);

  // [Text values]
  const WARN_TITLE = "Inactivity Alert";
  const WARN_TEXT = "Timeline will reset in 1 minute unless you press 'OK'";
  const WARN_BUTTON_TEXT = "OK";

  //// [FONTS: load custom fonts] ////
  const [fontsLoaded] = useFonts({
    SpecialElite_400Regular,
    Sancreek_400Regular,
  });

  // [If fonts loaded, remove splash screen]
  const onLayoutRootView = React.useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  // [If fonts not loaded, continue splash screen]
  if (!fontsLoaded) {
    return null;
  };

  //// [APP: If fonts loaded, display the app] ////
  return (
    <>
      <SafeAreaView style={styles.topSafeAreaView} />
      <SafeAreaView
        onLayout={onLayoutRootView}
        style={styles.appContainerAndBottomSafeAreaView}
        {...panResponder.panHandlers}
      >
        <StatusBar style='auto' hidden={true} />

        {/* [BACKGROUND IMAGE LAYER] */}
        <ImageBackground
          resizeMode='stretch'
          source={BACKGROUND_IMAGE}
          style={styles.imageBackground}
        >
          
          {/* [TOP INFORMATION BAR] */}
          <View style={styles.topBarContainer}>
            <Text style={isTextEnlarged ? styles.topBarTitleEnlarged : styles.topBarTitleFont}>
              {TITLE}
            </Text>
          </View>

          {/* [MAIN CONTENT] */}
          <View style={styles.timelineWrapper}>

            {/* [DECADES SCROLL BAR] */}
            <ScrollView 
              horizontal
              showsHorizontalScrollIndicator={false}
              style={styles.decadesWrapper}
            >
              {DECADES.map((decade, i)=> (
                <Pressable 
                  key={i}
                  onPress={() => scrollToDecade(decade.onPressValue)}
                  style={styles.decadesPressable}
                >
                  <Text style={isTextEnlarged ? styles.decadesLabelEnlarged : styles.decadesLabelFont}>
                    {`${decade.decade}'s`}
                  </Text>
                </Pressable>
              ))}
            </ScrollView>
            
            {/* [LIST OF CARDS DISPLAYING TIMELINE EVENTS] */}
            <FlatList
              data={DATA}
              horizontal
              initialNumToRender={DATA.length}
              initialScrollIndex={0}
              ItemSeparatorComponent={Platform.OS !== 'android' && flatListSeparatorRender}
              keyExtractor={flatListKeyExtractor}
              ref={timeLineRef}
              // removeClippedSubviews={false}
              renderItem={flatListRenderItem}
              showsHorizontalScrollIndicator={false}
            />
          </View>
          
          {/* [BOTTOM INFORMATION BAR] */}
          <View style={styles.bottomBarContainer}>
            <Text style={styles.bottomBarCopyright}>&copy;{COPYRIGHT}</Text>
            <View style={styles.bottomBarSwitchRow}>
              <MaterialIcons
                color='#E8DCB8'
                name='font-download'
                size={24}
                style={styles.bottomBarSwitchIcon}
              />
              <Switch
                ios_backgroundColor='#191109'
                onValueChange={handleEnlargeText}
                thumbColor='#FAB05A'
                trackColor={{ false: '#BD5923', true: '#BD5923' }}
                value={isTextEnlarged}
              />
            </View>
          </View>
        
          {/* [INACTIVITY WARNING MODAL] */}
          <Modal
            animationType='slide'
            transparent={true}
            visible={warningVisible}
            onRequestClose={handleWarningModalClose}
          >
            <View
              style={styles.warningWrapper}
            >
              <View 
                style={styles.warningVisibleBox}
              >
                <View style={styles.warningTitleBox}>
                  <Text style={isTextEnlarged ? styles.warningTitleEnlarged : styles.warningTitleFont}>
                    {WARN_TITLE}
                  </Text>
                </View>

                <View style={styles.warningSubtitleBox}>
                  <Text  style={isTextEnlarged ? styles.warningSubtitleEnlarged : styles.warningSubtitleFont}>
                    {WARN_TEXT}
                  </Text>
                </View>

                <Pressable 
                  onPress={handleWarningModalClose}
                  style={styles.warningButtonBox}
                >
                  <Text style={isTextEnlarged ? styles.warningButtonTextEnlarged: styles.warningButtonTextFont}>
                    {WARN_BUTTON_TEXT}
                  </Text>
                </Pressable>
              </View>
            </View>
          </Modal>

        </ImageBackground>
      </SafeAreaView>
    </>
  );
};

//// [STYLES] ////
const styles = StyleSheet.create({
  topSafeAreaView: {
    backgroundColor: '#191109', // brownDark
    flex: 0,
  },
  appContainerAndBottomSafeAreaView: {
    backgroundColor: '#191109', // brownDark
    flex: 1,
  },
  imageBackground: {
    flex: 1,
  },
  topBarContainer: {
    alignItems: 'center',
    alignSelf: 'stretch',
    backgroundColor: '#191109', // brownDark
    borderBottomColor: '#4A2711', // brownAccent
    borderBottomWidth: 1,
    borderStyle: 'solid',
    flexDirection: 'row',
    height: 42,
    justifyContent: 'center',
  },
  topBarTitleFont: {
    color: '#E8DCB8', // lightText
    fontFamily: 'Sancreek_400Regular',
    fontSize: 24,
  },
  topBarTitleEnlarged: {
    color: '#E8DCB8', // lightText
    fontFamily: 'System',
    fontSize: 35,
    fontWeight: 'bold',
  },
  timelineWrapper: {
    flex: 1,
  },
  decadesWrapper: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 10,
    marginBottom: 10,
    maxHeight: 80,
  },
  decadesPressable: {
    backgroundColor: '#FAB05A', // yellow
    borderColor: '#4A2711', // brownAccent
    borderRadius: 5,
    borderStyle: 'solid',
    borderWidth: 1,
    justifyContent: 'center',
    height: 80,
    width: 80,
  },
  decadesLabelFont: {
    fontFamily: 'SpecialElite_400Regular',
    fontSize: 20,
    textAlign: 'center',
  },
  decadesLabelEnlarged: {
    fontFamily: 'System',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  timelineSeparator: {
    alignSelf: 'flex-start',
    borderBottomColor: '#BD5923', // orange
    borderBottomWidth: 6,
    borderStyle: 'solid',
    marginHorizontal: -290,
    marginTop: 36,
    width: 580,
    zIndex: -1,
  },
  bottomBarContainer: {
    alignItems: 'center',
    alignSelf: 'stretch',
    backgroundColor: '#191109', // brownDark
    borderStyle: 'solid',
    borderTopColor: '#4A2711', // brownAccent
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 42,
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  bottomBarCopyright: {
    color: '#E8DCB8', // lightText
    fontSize: 12,
  },
  bottomBarSwitchRow: {
    alignContent: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  bottomBarSwitchIcon: {
    alignContent: 'center',
    justifyContent: 'center',
    marginRight: 6,
    marginTop: 4,
  },
  warningWrapper: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    zIndex: 2147483647,
  },
  warningVisibleBox: {
    alignItems: 'center',
    backgroundColor: '#322312', // brownMediumDark
    borderColor: '#4A2711', // brownAccent
    borderRadius: 20,
    borderWidth: 1,
    height: 250,
    justifyContent: 'center',
    padding: 20,
    width: 400,
  },
  warningTitleBox: {
    marginVertical: 10,
  },
  warningTitleFont: {
    fontFamily: 'SpecialElite_400Regular',
    fontSize: 30,
    textAlign: 'center',
    color: '#E8DCB8',
  },
  warningTitleEnlarged: {
    fontFamily: 'System',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#E8DCB8',
  },
  warningSubtitleBox: {
    marginVertical: 10,
  },
  warningSubtitleFont: {
    fontFamily: 'SpecialElite_400Regular',
    fontSize: 24,
    textAlign: 'center',
    color: '#E8DCB8',
  },
  warningSubtitleEnlarged: {
    fontFamily: 'System',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#E8DCB8',
  },
  warningButtonBox: {
    alignSelf: 'center',
    backgroundColor: '#FAB05A',
    borderRadius: 20,
    elevation: 2,
    marginVertical: 10,
    padding: 10,
    width: 350,
  },
  warningButtonTextFont: {
    fontFamily: 'SpecialElite_400Regular',
    fontSize: 20,
    textAlign: 'center',
  },
  warningButtonTextEnlarged: {
    fontFamily: 'System',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
