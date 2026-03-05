---
title: 'Evnex EV Charger Ring Flashing Red? The Offline Reconnect Fix'
description: 'Is the LED ring on your Evnex EV charger flashing red and refusing to charge your car? Learn how to fix the Wi-Fi disconnect and the 2025 3G network shutdown issue in New Zealand.'
category: 'Appliances'
lastUpdated: 2026-03-05
country: 'nz'
author: 'ErrorDocs Tech Team'
image: '/images/nz-ev/evnex-ev-charger-flashing-red-offline-fix.png'
tags: ['Evnex', 'EV Charger', 'Flashing Red Light', 'Offline', 'Wi-Fi Reconnect', 'NZ Tech']
instantAnswer: 'If your Evnex charger ring is flashing red, it has lost its connection to the Evnex Cloud. 1. Turn off the dedicated "EV Charger" breaker switch in your home switchboard. 2. Wait 60 seconds, then flip it back on. 3. If it still flashes red, open the Evnex Driver App. Go to Settings -> Wi-Fi Configuration. 4. Stand next to the charger to establish a local Bluetooth connection. 5. Re-select your home Wi-Fi and enter your password to push the charger back online.'
faqs:
  - question: 'Can I still charge my EV if the Evnex is flashing red?'
    answer: 'Usually, no. If the charger is set to a "Smart Charging" or "Solar Diversion" schedule, it requires an active internet connection to know when the power grid is cheap or when your solar panels are exporting. When it flashes red (offline), it defaults to a locked failsafe state and will not dispense electricity until the connection is restored.'
  - question: 'What does a solid blue ring mean?'
    answer: 'A solid blue ring indicates the charger is healthy, connected to the internet, but has paused charging because it is waiting for your predetermined "Off-Peak" cheap power window (usually 9 PM to 7 AM) to begin dispensing electricity.'
  - question: 'Why did my older Evnex randomly go offline permanently?'
    answer: 'If you bought an Evnex Core or R-Series charger before 2023, it likely relied on a built-in Vodafone/One NZ 3G cellular SIM card for internet, rather than your home Wi-Fi. In late 2025, the 3G network in New Zealand was entirely shut down. Your charger is permanently deaf. You must contact Evnex to arrange a 4G modem hardware upgrade.'
  - question: 'Why won’t it connect to my new Spark/One NZ Mesh router?'
    answer: 'Like most smart appliances, Evnex internal Wi-Fi chips only operate on the older 2.4 GHz frequency because it penetrates garage walls better. If you upgraded to a new Wi-Fi 6 or Mesh router that blends 2.4 GHz and 5 GHz into one name ("Band Steering"), the charger will get confused and reject the connection. You must separate the bands in your router settings.'
---

# Evnex EV Charger Ring Flashing Red? The Offline Fix

<div class='instant-fix-box'>
  <p>To fix a <strong>Flashing Red Light on an Evnex Charger</strong>: The unit has lost internet connectivity. <strong>1. The Breaker Reboot:</strong> Find your home switchboard, locate the heavy-duty EV breaker, flick it off, wait a minute, and flick it on. <strong>2. The Bluetooth Override:</strong> Open the Evnex App, go to General Settings -> Charger Wi-Fi. Stand within 2 meters of the unit to connect via Bluetooth, and re-type your home Wi-Fi password to force it back onto the Evnex Cloud.</p>
</div>

<AdSenseBlock slot='article-top' />

## The "Smart" Charger Dilemma

Evnex is one of New Zealand’s greatest EV success stories, manufacturing incredibly intelligent, solar-aware charging hardware directly out of Christchurch. 

Unlike a "dumb" charger that simply dumps maximum electricity into your Nissan Leaf or Tesla the moment you plug it in, an Evnex charger communicates constantly with the national grid. It knows when power is locally abundant (and cheap), and it tracks your roof's solar export data to ensure your car is charged using 100% free sunshine. 

However, all of this staggering intelligence relies entirely on a continuous, unbroken connection to the Evnex Cloud Servers. 

If this connection breaks, the beautifully crafted LED ring on the front of the unit changes from a reassuring green or blue to an aggressive, **Flashing Red**. 

When it flashes red, it refuses to charge. Here is how to diagnose the disconnect and force the charger back online. 

## Step 1: The Hard Reboot

If your home Wi-Fi router recently updated its firmware, or if you had a momentary power flicker during a winter storm, the Evnex internal network card may have simply "hung" in a panicked state. 

You cannot fix a frozen network card via software. You must physically cut the power. 

1.  Do not attempt to pull the plug out of the wall (Evnex chargers are hardwired deep into your home's electrical system). 
2.  Walk to your house's main switchboard/meter box. 
3.  Look for a large, thick breaker switch usually labeled **"EV Charger"**, **"Evnex"**, or **"32A Garage"**. 
4.  Flick this breaker to the **OFF** position. 
5.  Wait for exactly **60 seconds**. This allows the heavy internal capacitors inside the charger to drain their residual voltage completely. 
6.  Flick the breaker back **ON**. 
7.  The Evnex charger will do a sweep of its LED lights (cycling through colors) as it boots up. Wait three minutes. If it settles on Green or Blue, the crash is fixed. 

<AdSenseBlock slot='article-middle' />

## Step 2: The Bluetooth Wi-Fi Injection

If you recently changed your Spark, One NZ, or 2degrees Wi-Fi password—or if you replaced your router entirely—the Evnex charger is flashing red because it is trying to use an old password that no longer exists. 

Because the charger is offline, you cannot change its Wi-Fi settings over the internet. You must pair directly to the charger using short-range Bluetooth. 

1.  Ensure your smartphone has **Bluetooth turned ON**. 
2.  Walk out to your garage or driveway and stand directly next to the Evnex unit. (The Bluetooth range is intentionally very weak for security purposes). 
3.  Open the **Evnex Driver App** on your phone. 
4.  Tap on the **Settings** gear icon (usually in the corner or under the General tab). 
5.  Look for an option labeled **"Wi-Fi Configuration"** or **"Update Network Settings."** 
6.  The app will scan for the charger via Bluetooth. Once found, it will ask you to select a Wi-Fi network. 
7.  Select your home Wi-Fi name from the list. (Ensure it is a 2.4 GHz network; chargers cannot see 5 GHz networks). 
8.  Carefully type in your new Wi-Fi password. 
9.  Tap **Save/Connect**. 

The app will push the new credentials directly into the charger’s brain. Within 30 seconds, the red flashing ring will vanish, and the charger will reconnect to the cloud. 

## The 2025 Cellular Extinction Event

If your charger is located at the end of a long driveway far away from your house Wi-Fi, it likely connects to the internet using a built-in cellular SIM card. 

If you own an older Evnex model installed before 2023, you need to be aware of a massive infrastructure change. In late 2024 and throughout 2025, New Zealand telecom providers (One NZ, Spark, 2degrees) permanently shut down the country's **3G Cellular Network** to free up radio space for 5G. 

If your older Evnex charger relied on a 3G Vodafone/One NZ SIM card, it is not broken—the invisible cell towers it used to talk to simply no longer exist. It is completely deaf, and it will flash red forever. 

**The Solution:** You cannot fix this with an app. You must contact Evnex Support (support@evnex.com) and quote your charger's serial number. They will confirm if your hardware was caught in the 3G shutdown and will offer a heavily discounted hardware upgrade path to a modern 4G LTE or Wi-Fi-enabled unit. 

---

*This guide is part of the ErrorDocs New Zealand Appliance Rescue Series. Written and verified by Kiwi appliance specialists for 2026 hardware standards.*
