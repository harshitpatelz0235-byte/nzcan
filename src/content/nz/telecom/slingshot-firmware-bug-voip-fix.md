---
title: 'Slingshot NetComm Router: The Overnight Firmware Bug Fix'
description: 'Did your Slingshot home phone or Wi-Fi randomly stop working on a Tuesday morning? Learn how to identify and fix the infamous NetComm automatic firmware bug that wipes out your custom settings.'
category: 'Telecom'
lastUpdated: 2026-03-05
country: 'nz'
author: 'ErrorDocs Tech Team'
image: '/images/slingshot-firmware-bug.png'
tags: ['Slingshot', 'NetComm', 'Firmware', 'Router Bug', 'Home Phone', 'NZ Tech']
instantAnswer: 'Slingshot regularly pushes automatic firmware updates to NetComm routers at 3:00 AM. Occasionally, this process glitches and factory-resets the router without telling you. If your custom Wi-Fi name has vanished and reverted to "Slingshot_XXXX", or if your landline phone has no dial tone, the firmware bug has hit you. To fix the landline, you must call Slingshot support and ask them to manually re-push the "SIP / VoIP Configuration Profile" to your specific MAC address.'
faqs:
  - question: 'Can I stop Slingshot from updating my router?'
    answer: 'No. The TR-069 remote management protocol is hardcoded into the Slingshot firmware. The ISP uses this "backdoor" to apply mandatory security patches and update network routing tables. You cannot disable it unless you replace the router entirely with a third-party model.'
  - question: 'Why does my home phone ring, but hang up when I answer?'
    answer: 'This is a classic symptom of the VoIP firmware bug. The router downloads the new operating system, but fails to fully download the voice authentication certificates. The router thinks it has a phone connection, but the Slingshot SIP server rejects the incoming call because the router fails the security handshake.'
  - question: 'Will a factory reset fix the VoIP bug?'
    answer: 'Usually, yes. Pushing a paperclip into the Reset hole on the back of the router for 15 seconds forces the NetComm to wipe its memory and request a 100% clean download of all configuration files from the Slingshot server, which usually clears the glitch.'
  - question: 'Why did my Wi-Fi name change back to NetComm?'
    answer: 'When a firmware update fails or encounters a critical memory error during the installation, the router has a safety mechanism: it abandons the update and reverts to its bare-metal factory state so you do not lose internet completely. This wipes your custom Wi-Fi name and restores the default password printed on the back of the unit.'
---

# Slingshot NetComm Router: The Overnight Firmware Bug Fix

<div class='instant-fix-box'>
  <p>If your Slingshot NetComm router experiences the overnight firmware rollback bug, your Wi-Fi name will revert to the factory default and your VoIP landline will die. First, perform a hard <strong>Factory Reset</strong> (hold the back pinhole button for 15 seconds). Wait 10 minutes for it to rebuild. If your landline phone still has no dial tone after the reset, the VoIP profile is corrupt. Call Slingshot on 0800 89 2000 and specifically request: <em>"Please manually re-provision the SIP Voice profile to my NetComm router."</em></p>
</div>

<AdSenseBlock slot='article-top' />

## The 3:00 AM Router Wipe

You go to bed on a Monday night, and your home network is working perfectly. You have a great custom Wi-Fi name, your smart bulbs are all connected, and your home phone works.

You wake up on Tuesday morning. Your phone refuses to connect to the Wi-Fi. You pick up the home landline phone to call your ISP, and it is completely dead—no dial tone, just terrifying silence. 

You look at the white NetComm router in the lounge, and the lights are green. The internet is technically working, but your entire home network architecture has been destroyed.

You have just been hit by the **Slingshot TR-069 Firmware Bug**.

Because ISPs are constantly fighting off global malware attacks, they regularly update the operating systems inside the routers they supply to customers. Slingshot executes these mass updates at 3:00 AM so they don't interrupt your evening Netflix streaming.

Unfortunately, the combination of cheap NetComm hardware flash memory and complex remote management scripts means that roughly 2% of these overnight updates fail catastrophically.

## Symptom 1: The "Amnesia" Wi-Fi

The most obvious sign of an aborted firmware update is that your router develops complete amnesia. 

When the NetComm processor encounters a critical error while trying to overwrite its operating system at 3:00 AM, it triggers an emergency fail-safe. To prevent the router from becoming a permanently dead brick, it aborts the update, wipes its memory cache, and completely factory resets itself.

*   Your custom Wi-Fi name (e.g., *SmitheFamily5G*) is deleted instantly.
*   Your custom Wi-Fi password is deleted.
*   Your Port Forwarding rules for your PlayStation are deleted.
*   Your Static IP addresses for your wireless printer are deleted.

The router reverts completely to the factory defaults printed on the sticker on the back of the unit (typically `Slingshot_XXXX`). 

### The Fix: Don't Just Rename It

If this happens, your immediate instinct is to log into the router at `192.168.20.1` and quickly change the Wi-Fi name back so your devices reconnect.

**Do not do this yet.** 

If the router aborted an update, it is currently running in a "volatile" state. If you change the Wi-Fi name now, there is a very high chance the router will attempt the firmware update again tonight at 3:00 AM, fail again, and wipe your settings *again* tomorrow morning.

You must force a clean install:
1.  Leave the router turned ON.
2.  Take a paperclip and press the **Reset pinhole button** on the back for 15 seconds.
3.  Let the router completely wipe itself and perform a fresh, uninterrupted download of the new firmware from the Slingshot server.
4.  Wait 15 full minutes. 
5.  *Now* you can log in, change your Wi-Fi name back to *SmitheFamily5G*, and your devices will reconnect permanently.

<AdSenseBlock slot='article-middle' />

## Symptom 2: The Dead Landline (VoIP Failure)

The second, much more insidious symptom of the firmware bug affects your home phone.

In 2026, old copper phone lines are completely dead. If you have a home landline, it physically plugs into the green "Phone 1" port on the back of the Slingshot NetComm router. The phone calls are transmitted digitally over the fibre internet connection (Voice over IP, or VoIP).

Sometimes, the 3:00 AM firmware update succeeds perfectly. The router keeps your custom Wi-Fi name, and the internet works incredibly fast. 

But when you pick up the home phone, it is dead. Or worse, the phone rings when someone calls you, but when you pick it up, neither of you can hear each other (known as "One-Way Audio" or "Dead Air").

### The SIP Handshake Glitch
This happens because Slingshot internet and Slingshot voice are processed on two completely separate digital channels. 

The firmware update successfully reconnected the router to the internet channel, but it accidentally corrupted the digital certificate required to log into the Voice channel (the SIP server). The router thinks the phone is connected, but the Slingshot server at the other end is blocking the audio because the security passwords no longer match.

### The Fix: The "Manual Re-Provision" Script

You cannot fix the voice servers yourself. The SIP passwords required to make the VoIP phone work are heavily encrypted and completely hidden from the user interface. Even if you unlock the Advanced Settings panel, you cannot type the password in yourself because Slingshot refuses to give it to customers.

You must force Slingshot to fix their own mistake.

1.  Use your mobile phone to call Slingshot Support on **0800 89 2000**.
2.  Navigate through the automated voice menus to reach faults/technical support.
3.  When you reach a human agent, the agent's script will tell them to ask you to "unplug the phone from the wall and try a different handset." 
4.  **Bypass the script by saying this exactly:**
    > *"My internet is fine, but my VoIP landline died overnight after a router update. My NetComm router has lost its SIP registration. I need a Tier-2 technician to manually re-provision the Voice Profile to my router's MAC address."*

By using the technical terms "SIP registration" and "re-provision", the frontline agent immediately realizes you know exactly what the problem is. They will press a button on their internal software that blasts a fresh, uncorrupted voice certificate directly down the fibre line into your router. 

The "Phone 1" LED light on the front of your router will suddenly blink, turn solid green, and your dial tone will immediately return.

---

*This guide is part of the ErrorDocs NZ Telecom Rescue Series. Written and verified by NZ broadband specialists for 2026 hardware standards.*
