---
title: 'Mitsubishi "Wait" on Remote? The 3-Minute Power Cycle Secret'
description: 'Is your Mitsubishi Heat Pump stuck with a "Please Wait" message on the remote control? Learn how to force a hard reboot and clear the New Zealand brownout memory glitch.'
category: 'Appliances'
lastUpdated: 2026-03-05
country: 'nz'
author: 'ErrorDocs Tech Team'
image: '/images/nz-ev/mitsubishi-heat-pump-wait-message-remote-fix.png'
tags: ['Mitsubishi Electric', 'Heat Pump', 'Please Wait', 'Remote Control', 'NZ Tech']
instantAnswer: 'A "Please Wait" message on a Mitsubishi remote means the indoor unit is trying to boot its internal computer after a power loss. If it is stuck for more than 3 minutes, the system has hung. 1. Put the remote down. 2. Go to your home switchboard and turn off the "Heat Pump" circuit breaker. 3. Look at your remote. Remove the AAA batteries. 4. Wait 3 full minutes. 5. Put the batteries back in the remote. Turn the breaker back on. The system will synchronize perfectly.'
faqs:
  - question: 'Why does "Please Wait" appear in the first place?'
    answer: 'Whenever electricity is cut (even for a split second during a New Zealand winter storm) and then restored, the Mitsubishi indoor unit performs an automatic safety diagnostic. It checks refrigerant pressure, fan motor resistance, and outdoor unit communication. This self-check takes exactly 3 minutes, during which the remote is intentionally disabled.'
  - question: 'What if "Please Wait" is flashing aggressively?'
    answer: 'A flashing "Wait" message is more serious than a solid one. It usually indicates that the indoor unit is receiving power, but it cannot establish a connection with the massive outdoor compressor. If a 3-minute hard breaker reset does not clear a flashing message, the communication wire outside is likely damaged or the outdoor motherboard has failed.'
  - question: 'Does pressing the hidden reset button on the remote work?'
    answer: 'Sometimes. If you slide the remote cover down, you will see a tiny pinhole labeled "Reset." Pressing this with a paperclip wipes the remote’s memory. While this fixes a frozen remote screen, it does not fix a frozen heat pump motherboard. You must perform the cold boot at the switchboard to fix the actual appliance.'
  - question: 'My remote screen is totally blank. Is it also broken?'
    answer: 'No, your batteries are dead. Mitsubishi remotes use active LCD screens that drain AAA batteries even when the heat pump is turned off. Replace the batteries with high-quality alkalines (like Energizer or Duracell). Cheap zinc-carbon batteries often lack the voltage required to transmit a strong infrared signal to the wall unit.'
---

# Mitsubishi "Wait" on Remote? The 3-Minute Reset

<div class='instant-fix-box'>
  <p>To fix a <strong>"Please Wait" message locked on a Mitsubishi Remote</strong>: The heat pump computer has crashed during a boot sequence. <strong>1. The Breaker:</strong> Turn off your Heat Pump circuit breaker at the wall or switchboard. <strong>2. The Remote:</strong> Slide the remote cover down and completely remove the batteries to kill the screen. <strong>3. The Sync:</strong> Leave everything perfectly dead for 3 minutes. Put the batteries back. Turn the breaker on. Wait exactly 3 minutes without touching any buttons. The Wait message will vanish.</p>
</div>

<AdSenseBlock slot='article-top' />

## The Frozen Wall Control

Mitsubishi Electric heat pumps are renowned across New Zealand for their reliability. However, because they are essentially massive wall-mounted computers, they are highly susceptible to the dirty electricity and micro-brownouts that plague the NZ power grid during heavy winter weather. 

If you attempt to turn on your heat pump, but the wall-mounted controller (or the handheld remote) completely ignores your button presses and simply displays a stark **"Please Wait"** message on the LCD screen, you are locked out. 

The most frustrating part of this error is that the heat pump itself appears completely lifeless—no lights, no beeps, and no moving louvers. 

Before you assume the primary motherboard has fried and call a $180/hour technician, you must understand the "3-Minute Diagnostic Interval" and how to properly bypass a stuck system. 

## The 3-Minute Safety Check

The **"Please Wait"** message is not actually an error code. It is a deliberate status indicator. 

Whenever a Mitsubishi heat pump loses electricity—even if the lights in your house only flickered for a millisecond—the internal microprocessor immediately shuts the compressor down to prevent a catastrophic pressure surge. 

When the power is restored, the heat pump does not simply turn back on. It enters a strict, mandatory **3-Minute Diagnostic Mode**. 

During these 180 seconds, the indoor unit sends test voltages to the fan motor, pings the outdoor compressor to ensure it survived the surge, and measures the ambient temperature of the room. 

While it does this, it completely ignores the remote control and displays "Please Wait" to stop you from spamming the ON button and interrupting the test. 

**The Problem:** If the digital handshake with the outdoor unit fails, or if the microprocessor glitches during the scan, the 3-minute timer never expires. The machine hangs indefinitely in diagnostic mode. 

<AdSenseBlock slot='article-middle' />

## Step 1: The "Dual Power Cycle" Restart

If it has been 20 minutes and the "Wait" message is still locked on the screen, you must perform a Dual Power Cycle. You cannot just reset the heat pump; you must also wipe the memory of the remote control, or they will remain out of sync. 

1.  **Kill the Main Power:** Go to your home's main electrical switchboard. Find the heavy-duty breaker labeled **Heat Pump** or **A/C**. Flick it to **OFF**. 
2.  **Kill the Remote Power:** Pick up your remote control. Slide the front plastic casing down and completely remove the AAA batteries. The LCD screen will instantly go blank. *(If you have a hard-wired wall controller, skip this step).*
3.  **The Capacitor Bleed:** You must wait a full **3 to 5 minutes**. Do not rush this. The circuit boards inside the massive outdoor compressor hold residual electricity for several minutes. If you turn the power back on too early, the computer does not actually restart. 
4.  **The Boot Up:** Put the batteries back into the remote. Walk to your switchboard and flick the Heat Pump breaker to **ON**. 
5.  **Hands Off:** Look at your remote (or wall controller). "Please Wait" will immediately appear on the screen. **Do not touch any buttons.** 
6.  Set a timer on your phone for exactly 3 minutes. 

Once the 3 minutes expire, you will hear a distinct *click* from the indoor unit. The "Please Wait" message will vanish, replaced by the standard clock and temperature readout. You can now operate the heat pump normally. 

## Step 2: The Physical Wiring Check

If you performed the 5-minute Dual Power cycle perfectly, waited the initial 3 minutes for it to boot, and the "Please Wait" message refuses to disappear, you have suffered a physical hardware failure. 

The indoor computer is desperately trying to reach the outdoor compressor, but it cannot. 

*   **The Isolator Switch:** Walk outside to the massive metal compressor unit. Bolted to the wall beside it is a white weatherproof switch. Did someone accidentally flick this down to "OFF" while gardening? If the outdoor unit has no power, the indoor unit will display "Wait" forever. 
*   **The Comms Wire:** Inspect the grey conduit wire running between the two units. If Rats have chewed through it, or if a line-trimmer accidentally sliced it, the data signal is severed. 

If the physical switches are on and the wires are intact, the electrical surge that caused the initial outage has lethally damaged the outdoor Printed Circuit Board (Motherboard). You must schedule a confirmed Mitsubishi service agent to replace the hardware board (typically a $600 to $900 repair in New Zealand). 

---

*This guide is part of the ErrorDocs New Zealand Appliance Rescue Series. Written and verified by Kiwi HVAC specialists for 2026 hardware standards.*
