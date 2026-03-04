---
title: 'Telus SmartHome Camera Offline? The Flashing Red Fix'
description: 'Is your Telus SmartHome Security camera completely offline and flashing a red light? Learn how to force a Wi-Fi reset and reconnect your ADC-v723 or doorbell using the app.'
category: 'Telecom'
lastUpdated: 2026-03-05
country: 'ca'
author: 'ErrorDocs Tech Team'
image: '/images/can-telecom/telus-smarthome-camera-offline-flashing-red.png'
tags: ['Telus', 'SmartHome', 'Security Camera', 'Flashing Red Light', 'Offline Fix', 'Canada Tech']
instantAnswer: 'If your Telus SmartHome camera is flashing a red light, it has disconnected from your Wi-Fi network. Do not delete it from your app yet. 1. Find the physical "Reset" or "WPS" button on the back/bottom of the camera. 2. Press and hold it for exactly 5 to 7 seconds until the light begins flashing WHITE. (Do not hold it longer or it will factory wipe). 3. The camera is now broadcasting its own Wi-Fi. 4. Open the Telus SmartHome app to connect it to your home Wi-Fi again.'
faqs:
  - question: 'What does a solid red light mean?'
    answer: 'A solid red light means the camera is powered on but cannot reach the internet. This usually means your home internet router is offline, or the camera has been actively deleted from your Telus SmartHome account and requires a complete factory reset to be re-added.'
  - question: 'Why does my camera drop offline every week?'
    answer: 'Telus ADC cameras are exceptionally sensitive to 5 GHz "Band Steering." If your Telus Wi-Fi Hub is constantly trying to force the camera between the 2.4 GHz and 5 GHz bands, the camera’s internal network chip will crash. You should log into your Telus router and manually split the Wi-Fi frequencies into two separate names, forcing the camera to stay locked on 2.4 GHz.'
  - question: 'How do I completely factory reset the camera?'
    answer: 'If the camera refuses to enter pairing mode, you must perform a harsh factory reset. Find the reset pinhole or WPS button. Press and hold it down completely for 15 to 20 seconds. Wait until the LED light rapidly flashes Red and Green interchangeably. The camera will then wipe its memory entirely.'
  - question: 'Will this fix my Telus SkyBell Doorbell?'
    answer: 'Yes, but the light sequence is slightly different for doorbells. To put a Telus doorbell into Wi-Fi pairing mode, press and hold the main ringer button until the glowing ring flashes alternating Red and Green. If you need a full factory wipe on a doorbell, hold the button until it flashes Yellow.'
---

# Telus SmartHome Camera Offline? The Flashing Red Fix

<div class='instant-fix-box'>
  <p>To fix a <strong>Telus Camera Flashing Red Light</strong>: It has lost its Wi-Fi credentials. <strong>1. Enter Pairing Mode:</strong> Press and hold the reset/WPS button on the camera for 5-7 seconds until the LED starts flashing <strong>White</strong>. <strong>2. Connect your Phone:</strong> Open your smartphone Wi-Fi settings and connect to the network named "ADC-V723" or similar. <strong>3. The Browser Intercept:</strong> Open Chrome on your phone and type <code>http://v723install</code>. <strong>4. Re-Link:</strong> Select your home Wi-Fi name from the list and enter your password. The camera light will turn solid green.</p>
</div>

<AdSenseBlock slot='article-top' />

## The "Alarm.com" Disconnect

When you sign a contract for Telus SmartHome Security in Canada, the technician mounts sleek white cameras outside your garage and inside your living room. These cameras are manufactured by a massive security conglomerate called Alarm.com (ADC). 

They work flawlessly—until the day you get a new Wi-Fi router, or change your Wi-Fi password, or experience a sudden neighborhood power outage. 

When the camera powers back on, it tries to find its previously saved Wi-Fi network. If it fails, the glowing LED indicator light on the camera changes from a healthy Solid Green to a frantic **Flashing Red**. 

Your Telus app will push a notification to your phone stating "Camera Offline," rendering your security system blind.

Here is the exact protocol to force the camera back onto your network without needing to wait three days for a Telus technician. 

## The Re-Pairing Protocol (AP Mode)

Do not aggressively delete the camera from your Telus SmartHome mobile app. If you delete it, you will have to set up all your motion recording rules again. 

Instead, you simply need to update the Wi-Fi password stored inside the camera's memory chip using **AP (Access Point) Mode**. 

### 1. Identify the Button
*   **Indoor Cameras (e.g., ADC-V522IR):** Look at the physical back of the square camera housing. Find the button labeled "WPS / Reset."
*   **Outdoor Cameras (e.g., ADC-V723):** Look directly underneath the cylindrical camera lens. There is a tightly sealed rubber flap to protect against Canadian winters. Prying this flap back reveals the reset button. 
*   **Doorbells:** The long, rectangular button that your guests physically push is the main interaction button.

### 2. Trigger the White Light
*   With the camera plugged into power, press and hold the button.
*   **Crucial Timing:** Hold it for exactly **5 to 7 seconds**. 
*   When the LED indicator starts flashing **White** (or alternating Red/Green on a doorbell), instantly let go of the button. 
*   *(Warning: If you hold the button for 15+ seconds, the LED will rapidly bounce Red/Green. This means you have accidentally triggered an irreversible factory memory wipe).*

### 3. The Digital Handshake
When the camera flashes white, it has temporarily become its own Wi-Fi router. 
1.  Take your smartphone and stand directly next to the camera. 
2.  Open your phone's **Wi-Fi Settings**. 
3.  Look for a new Wi-Fi network named after the camera (e.g., **ADC-V723 (MAC: 1A:2B:3C)**). 
4.  Connect your phone to that completely open Wi-Fi network. (Your phone will warn you it has no internet; click Keep Trying/Ignore). 

<AdSenseBlock slot='article-middle' />

### 4. The Hidden Browser Menu
Now that your phone is directly attached to the camera's brain, you must inject the new Wi-Fi credentials. 
1.  Open Chrome or Safari on your phone. 
2.  In the URL address bar at the very top, type exactly: **`http://v723install`** (replace `v723` with your exact camera model number, or simply type **`http://192.168.1.1`**). Hit Enter/Go. 
3.  A hidden Alarm.com setup page will instantly load. 
4.  Tap **Scan for Wireless Networks**. 
5.  Find your Telus Home Wi-Fi network in the list and click it. 
6.  Type in your home Wi-Fi password perfectly. Click Save. 

The camera will immediately drop the connection to your phone and attempt to log into your home router. 

Watch the LED light on the camera. It will flash white, then flash red, and within two minutes, it will glow perfectly **Solid Green**. 

## The "Solid Red" Fatal Error

If you successfully connect the camera to the Wi-Fi (it flashes white, then flashes green), but it ultimately settles on a completely **Solid Red** light, you have a severe account synchronization problem. 

A solid red light means the camera is successfully connected to the internet, but the Alarm.com master servers are actively rejecting the video feed.

This happens for two reasons in 2026:
1.  **Subscription Cancelled:** You moved into a house where the previous owner left the cameras behind, and you are trying to use them without paying for a Telus SmartHome subscription. 
2.  **Mac Address Ghosting:** The camera was improperly deleted from the system backend. 

If you are paying for an active subscription and the light is Solid Red, you must use a paperclip to hold the reset button for 20 seconds (until the Red/Green rapid flash) to perform a nuclear factory wipe. Then, log into your Telus App, click **Add Device -> Camera**, and add it as a brand-new device using its MAC Address. 

---

*This guide is part of the ErrorDocs Canadian Telecom Rescue Series. Written and verified by Canadian broadband specialists for 2026 hardware standards.*
