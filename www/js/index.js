/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('deviceready').classList.add('ready');

    document
        .getElementById('playVideo1')
        .addEventListener('click', () => playTestVideo('https://player.vimeo.com/external/256637652.m3u8?s=bdeda21075fabc08510bdfd6c0f285ca5aa95097', 5000));
    document
        .getElementById('playVideo2')
        .addEventListener('click', () => playTestVideo('https://fast.wistia.net/embed/medias/fb0z73tr79.m3u8', 8000));
    document
        .getElementById('playAudio')
        .addEventListener('click', () => playTestAudio('https://s3.amazonaws.com/yoga-burn/follow-along-audio/Yoga+Burn+Meditation+Solution+Spirit.mp3', 50000));
}

function playTestVideo(url, startTimeInMs) {
    var options = {
        orientation: 'landscape',
        shouldAutoClose: true,  // true(default)/false
        controls: true, // true(default)/false. Used to hide controls on fullscreen
        title: 'Best Video',
        subtitle: 'By Webvalley',
        successCallback,
        errorCallback
    };
    window.plugins.streamingMedia.playVideoAtTime(url, startTimeInMs, options);
}

function playTestAudio(url, startTimeInMs) {
    var options = {
        bgColor: '#FFFFFF',
        bgImageScale: 'fit', // other valid values: 'stretch', 'aspectStretch'
        keepAwake: false, // prevents device from sleeping. true is default. Android only.
        successCallback,
        errorCallback
    };
    window.plugins.streamingMedia.playAudioAtTime(url, startTimeInMs, options);
}

function successCallback(result) {
    console.log('Player closed without error.');
    setMediaPlayerStatistics(result);
}

function errorCallback(result) {
    console.log(`Error! ${result.errorMessage}`);
    setMediaPlayerStatistics(result);
}

function setMediaPlayerStatistics(playerResult) {
    console.log('Result', playerResult);
    document.getElementById('timeStoppedAt').innerText = playerResult.currentPositionInMs ? playerResult.currentPositionInMs : 0;
    document.getElementById('wasMediaFinished').innerText = playerResult.finishedTheMedia ? playerResult.finishedTheMedia : false;
    document.getElementById('mediaDuration').innerText = playerResult.mediaDurationInMs ? playerResult.mediaDurationInMs : false;
    document.getElementById('errorMessage').innerText = playerResult.errorMessage ? playerResult.errorMessage : 'None';
}
