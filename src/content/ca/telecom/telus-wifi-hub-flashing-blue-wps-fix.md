---
title: 'Telus Wi-Fi Hub Flashing Blue? The 2-Minute WPS Hack'
description: 'Is your Telus Wi-Fi Hub or Boost Wi-Fi extender stuck flashing a blue light? Learn how to exit the endless WPS pairing loop without accidentally erasing your entire home network.'
category: 'Telecom'
lastUpdated: 2026-03-05
country: 'ca'
author: 'ErrorDocs Tech Team'
image: '/images/can-telecom/telus-wifi-hub-flashing-blue.png'
tags: ['Telus', 'Wi-Fi Hub', 'Flashing Blue Light', 'Boost Wi-Fi', 'WPS Sync', 'Canada Tech']
instantAnswer: 'A slow flashing blue light on a Telus Wi-Fi Hub or Boost Wi-Fi means the device is stuck in WPS (Wi-Fi Protected Setup) pairing mode, listening for a new device to connect. It should time out after 2 minutes. If it flashes blue endlessly, the software is looping. Do not hold the WPS button down to stop it—holding it for 10 seconds will trigger a Master Factory Reset. Instead, unplug the power cord from the wall outlet for 30 seconds. Plug it back in. It will blink purple during boot-up, then settle on a solid blue light (normal operation).'
faqs:
  - question: 'What does a solid blue light mean on Telus Boost Wi-Fi?'
    answer: 'A solid blue light is the goal. It means the Telus Wi-Fi Hub or Boost Wi-Fi extender is powered on, fully connected to the Telus fiber network, and actively broadcasting the Wi-Fi signal to your devices. You only need to troubleshoot if the light is flashing, red, or amber.'
  - question: 'Why did the light turn solid purple?'
    answer: 'A solid purple light indicates the Telus Wi-Fi Hub is booting up and initializing its internal operating system. This is normal immediately after you plug it in. If it stays solid purple for more than 10 minutes, the firmware is corrupted and you must perform a factory reset.'
  - question: 'Is the WPS button safe to use?'
    answer: 'From a cybersecurity standpoint in 2026, WPS is considered highly vulnerable to brute-force hacking attacks. While it is convenient for connecting wireless printers without typing a password, it is always safer to disable WPS entirely within the Telus Connect app and manually type your Wi-Fi password.'
  - question: 'What does an Amber/Yellow light mean on the Boost Pod?'
    answer: 'If your secondary Telus Boost Wi-Fi pod has a solid amber or yellow light, it means the Wi-Fi backhaul signal is too weak. You have placed the pod too far away from the main Telus Wi-Fi Hub. You must unplug it and move it closer to the center of the house.'
---

# Telus Wi-Fi Hub Flashing Blue? The 2-Minute WPS Hack

<div class='instant-fix-box'>
  <p>To fix a Telus Wi-Fi Hub or Boost Pod that is <strong>stuck flashing blue</strong>: The modem is trapped in a WPS listening loop. <strong>1.</strong> Do not press the WPS button again. <strong>2.</strong> Unplug the black power cable from the wall. <strong>3.</strong> Wait 30 seconds. <strong>4.</strong> Plug it back in. The light will turn solid purple (booting), then flash purple, and finally turn <strong>Solid Blue</strong>. Solid blue means the internet is working perfectly. If you hold the WPS button for 10 seconds while it is flashing, you will accidentally factory reset the entire network.</p>
</div>

<AdSenseBlock slot='article-top' />

## Decoding the Blueprint of Telus Lights

Telus internet hardware (specifically the white cylindrical Telus Wi-Fi Hub and the smaller, plate-like Telus Boost Wi-Fi Extenders) relies heavily on a single, multi-colored LED ring on the front to communicate its status to the user.

If you don't have the manual, this single glowing light can be incredibly confusing. 

The color you always want to see is **Solid Blue**. Solid blue means the connection is completely healthy. 

However, if that blue light starts flashing, pulsing, or strobing, it means the hardware is actively executing a background protocol. If it gets stuck flashing blue for more than five minutes, your Wi-Fi network is vulnerable, and you need to intervene physically to close the loop.

## The WPS Vulnerability Loop

A **slowly flashing blue light** (turning on and off roughly every two seconds) means one thing: The Telus hardware has entered Wi-Fi Protected Setup (WPS) mode.

WPS is an older networking protocol designed to let you connect headless devices (like wireless HP printers or smart washing machines that don't have keyboards) to your Wi-Fi by simply pushing a physical button on the router. 

When you push the WPS button on the Telus Hub, the light flashes blue to indicate: *"I am broadcasting an open pairing signal. Any device that asks to join right now is automatically allowed in without a password."*

By design, this "open" window is supposed to automatically shut down and time out after exactly **2 minutes** for security reasons.

### Why is it Flashing Forever?

If your Telus Hub has been flashing blue for an hour, it means the internal timer software has crashed. 

When a router is permanently stuck in WPS broadcast mode, it presents a massive cybersecurity vulnerability. Anyone standing outside your house with a smartphone could potentially force a handshake with the router and join your private home network without ever knowing your Wi-Fi password. 

Furthermore, while it is stuck in this loop, it often refuses to assign IP addresses to your legitimate devices like laptops and cell phones, causing your standard internet access to drop.

<AdSenseBlock slot='article-middle' />

## The "Accidental Wipe" Trap

When people see a flashing light on a router, human instinct dictates that they should push the corresponding button to make it stop. 

**If your Telus Hub is flashing blue, touching the physical WPS/Reset button is the absolute worst thing you can do.**

Telus engineers mapped two completely different functions to the exact same physical button on the back of the cylinder:

*   **A short press (1 second):** Turns WPS mode On or Off. 
*   **A long press (10+ seconds):** Triggers a "Nuke from Orbit" Master Factory Reset.

If the Hub is stuck in a software loop, a 1-second press usually will not register. The user naturally presses harder and holds the button down in frustration. 

Exactly 10 seconds later, the light turns red. You have just triggered a Master Reset. The modem deletes your custom Wi-Fi name, deletes your custom password, wipes all parental controls, and reverts to the randomized sticker password printed on the back of the unit. You now have to spend an hour setting up every smart TV and iPad in your house again.

## The Safe Fix: The 30-Second Hard Cycle

To break the infinite WPS loop without risking a catastrophic factory reset, you must execute a Hard Power Cycle. This forces the RAM memory to dump the frozen WPS command.

1.  Leave the router turned on.
2.  Reach behind the Telus Wi-Fi Hub and completely remove the black power cable from the wall outlet. 
3.  The blue light will instantly die. 
4.  **Wait a minimum of 30 seconds.** This time is non-negotiable. Modern routers have electrical capacitors that can keep the RAM alive for a few seconds even after the power is cut. 30 seconds guarantees the memory dies.
5.  Plug the power cord firmly back into the wall outlet.

### The Telus Boot Sequence (What to Watch For)

When you plug the Telus Hub back in, it will take about three minutes to re-establish the fiber connection and rebuild the Wi-Fi. Here is the exact light sequence you should see:

1.  **Solid Purple:** The internal Linux operating system is booting up (like the Apple logo on an iPhone).
2.  **Flashing Purple:** The Hub is establishing a physical hardware handshake with the Telus network outside on the street.
3.  **Fast Flashing Blue (Boost Wi-Fi Only):** If you are rebooting a satellite Boost Wi-Fi pod, it will flash blue very rapidly (every half a second) while it searches for the main Gateway out in the living room.
4.  **Solid Blue:** The boot sequence is complete. You are fully online, and the WPS loop has been successfully terminated.

## How to Permanently Disable WPS

Because WPS is an aging and insecure standard, the absolute best networking practice in 2026 is to disable it entirely on the software level. This prevents the button from ever working, meaning a pet, a child, or a software glitch can never accidentally trigger the blue flashing light again.

1.  Open the **Telus Connect App** on your smartphone.
2.  Navigate to the **Network** or **Advanced Settings** tab.
3.  Look for **Wi-Fi Settings** or **Device Management**.
4.  Find the toggle switch labeled **Wi-Fi Protected Setup (WPS)**.
5.  Slide the toggle to the **Off** position.
6.  The app will push a configuration update to the Hub. The physical button on the back of the unit is now essentially neutralized (except for the 10-second factory reset function, which remains active).

---

*This guide is part of the ErrorDocs Canadian Telecom Rescue Series. Written and verified by Canadian broadband specialists for 2026 hardware standards.*
