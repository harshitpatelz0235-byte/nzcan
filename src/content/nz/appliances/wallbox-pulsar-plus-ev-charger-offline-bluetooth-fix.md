---
title: 'Wallbox Pulsar Plus Offline? The 2026 App Bluetooth Glitch Fix'
description: 'Is your Wallbox Pulsar Plus EV charger showing offline in the app or refusing to connect via Bluetooth? Learn the hard reset sequence to force a network reconnection.'
category: 'Appliances'
lastUpdated: 2026-03-05
country: 'nz'
author: 'ErrorDocs Tech Team'
image: '/images/nz-ev/wallbox-pulsar-plus-ev-charger-offline-bluetooth-fix.png'
tags: ['Wallbox', 'Pulsar Plus', 'EV Charger', 'Offline', 'Bluetooth', 'App Glitch', 'NZ Tech']
instantAnswer: 'If your Wallbox Pulsar Plus is offline and the app cannot find it via Bluetooth: 1. Do not reinstall the app yet. Go to your home switchboard and turn OFF the EV Charger circuit breaker for 30 seconds. 2. Turn the breaker ON. Wait for the Wallbox LED to turn solid green. 3. Turn your phone’s Bluetooth OFF and ON again. Ensure your phone’s GPS/Location services are activated (the 2025/2026 Wallbox App updates require location data to scan for local Bluetooth devices). Open the app and it will snap back online.'
faqs:
  - question: 'Why does the charger randomly drop off my Wi-Fi?'
    answer: 'The Pulsar Plus possesses a notoriously weak 2.4GHz Wi-Fi antenna. If your New Zealand home uses a modern "Mesh" Wi-Fi system (like Google Nest or Eero) that constantly attempts to steer devices between 2.4GHz and 5GHz bands, the Wallbox will panic and disconnect entirely. You must lock the charger’s MAC address to the 2.4GHz band inside your router settings.'
  - question: 'Can I still charge my car if the app is offline?'
    answer: 'Yes. Unless you actively "Locked" the charger using the app before it went offline, a Wallbox Pulsar Plus operates perfectly fine as a "Dumb" charger. If you plug it into your EV, it will instantly dispense electricity at its maximum rated safe speed (usually 32 Amps). However, you cannot view statistics or set off-peak charging schedules until it reconnects.'
  - question: 'Why did the latest firmware update break my Bluetooth?'
    answer: 'During 2025/2026, Wallbox pushed several Over-The-Air (OTA) firmware updates to address OCPP protocol disconnections. In some cases, the update corrupts the local cache on your smartphone. If a hard breaker reset does not fix the Bluetooth connection, you must "Forget" the charger in your phone’s Bluetooth menu, delete the Wallbox app, reinstall it, and log back in.'
  - question: 'What does a solid yellow light mean?'
    answer: 'If your Wallbox LED is solid yellow and the app is offline, the charger is actively downloading and installing a firmware update. Do not disconnect the power or attempt to charge the vehicle. Wait 15 minutes. Once the update finishes, it will reboot itself and the LED will turn green.'
---

# Wallbox Pulsar Plus Offline: The Bluetooth App Fix

<div class='instant-fix-box'>
  <p>To fix an <strong>Offline Wallbox Pulsar Plus</strong>: The internal Bluetooth/Wi-Fi chip has hung. <strong>1. The Breaker Reboot:</strong> Walk to your main electrical box. Turn off the Wallbox circuit breaker for exactly 30 seconds. <strong>2. The Phone Reboot:</strong> Turn your phone's Bluetooth off and back on. <em>Crucially, ensure Location Services (GPS) are turned ON.</em> <strong>3. The Test:</strong> Turn the wall breaker back on. Wait for the green LED. Open the Wallbox App and stand within 2 meters of the unit; it will instantly pair and push the unit back onto your home Wi-Fi.</p>
</div>

<AdSenseBlock slot='article-top' />

## The "Smart" Charging Blackout

The Wallbox Pulsar Plus is one of the most compact and aesthetically pleasing EV chargers installed in New Zealand. It relies heavily on the Wallbox smartphone app to manage off-peak charging schedules (syncing with cheap night rates from Contact Energy or Electric Kiwi). 

However, because its physical footprint is so small, its internal Wi-Fi and Bluetooth antennas are notoriously weak. 

If you open the Wallbox app to check your charging status and see the grey **Offline** cloud icon, the charger has lost its connection to the internet. Worse, if you walk into your garage and try to connect to the charger locally using Bluetooth, the app will simply spin in a "Searching for Charger" loop. 

Here is exactly why the 2026 app updates cause this, and how to force the charger to wake up without losing your charging history. 

## The GPS/Bluetooth Requirement Glitch

In late 2025 and early 2026, both Apple iOS and Google Android overhauled their privacy and security permissions regarding local network scanning. 

The Wallbox App was updated to comply with these rules. To successfully connect to the Pulsar Plus via short-range Bluetooth, the app now strictly requires **Location Services (GPS) to be fully activated** on your phone. 

If you turn off your phone's GPS to save battery, or if you actively denied the Wallbox app "Location Data" permissions during the installer setup, the app is legally walled-off from accessing your phone's Bluetooth radio. The app will state the charger cannot be found, even if you are touching it. 

### How to Fix App Permissions:
1.  **iPhone Users:** Go to Settings > Privacy & Security > Location Services. Ensure it is toggled ON. Scroll down to the Wallbox App and set it to "While Using the App." 
2.  **Android Users:** Pull down your notification shade and ensure the "Location" icon is highlighted. Go to Settings > Apps > Wallbox > Permissions, and allow Location access. 
3.  Force-close the Wallbox app by swiping it away, stand directly next to the charger, and re-open it. 

<AdSenseBlock slot='article-middle' />

## Step 1: The Wi-Fi Steering Crash

If your app connects via Bluetooth perfectly fine when you stand next to it, but the charger still refuses to connect to your home Wi-Fi to grab the latest off-peak pricing, the internal Wi-Fi chip has crashed. 

This usually happens if you own a modern Mesh Wi-Fi router (like Spark's Smart Modem or a Google Nest). These routers use "Band Steering" to constantly shuffle devices between the 2.4GHz and 5GHz ranges. The Wallbox (which only possesses a 2.4GHz chip) gets terribly confused by 5GHz pings and eventually drops the connection entirely in frustration. 

**The Hard Reboot Protocol:**
You cannot reboot the Wi-Fi chip using the app. You must drop the voltage physically. 

1.  Leave your phone in the garage. 
2.  Walk to your home's main electrical switchboard. 
3.  Locate the large breaker dedicated to your EV (usually labeled **Wallbox** or **32A EVSE**). 
4.  Flick it to the **OFF** position. 
5.  Wait a minimum of **30 seconds** to allow the capacitors inside the tiny Wallbox chassis to drain perfectly flat. 
6.  Flick the breaker back **ON**. 
7.  Walk back to the garage. The Wallbox will cycle its LEDs (briefly flashing purple/blue) before settling on a solid, pulsing **Green**. 

## Step 2: Forgetting the Network

Once the green light is on, open the Wallbox app. If the charger is *still* failing to re-establish a Wi-Fi link, the saved network credentials inside the charger's memory have been corrupted by a recent over-the-air firmware bump. 

1. Ensure the app is connected via Bluetooth (you will see the Bluetooth icon lit up inside the app dashboard). 
2. Tap the **Settings** gear icon in the top right. 
3. Tap **Connectivity** -> **Wi-Fi**. 
4. If your home network is listed, tap it and select **Forget Network**. 
5. Turn the Wi-Fi toggle OFF, then immediately back ON inside the app to force a fresh scan. 
6. Select your home network and re-type the password very carefully. 

The charger will lock onto the network. The grey offline cloud icon will turn blue, meaning your Wallbox is successfully reporting back to the cloud.

---

*This guide is part of the ErrorDocs New Zealand Appliance Rescue Series. Written and verified by Kiwi EV specialists for 2026 hardware standards.*
