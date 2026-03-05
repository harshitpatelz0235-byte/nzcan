---
title: 'Fujitsu Ducted System Red/Green Flashing? The Hard Reset Fix'
description: 'Is your Fujitsu Ducted Heat Pump blowing no air while the wall controller or ceiling receiver flashes Red and Green? Learn how to decode the error and perform a hard master reset.'
category: 'Appliances'
lastUpdated: 2026-03-05
country: 'nz'
author: 'ErrorDocs Tech Team'
image: '/images/nz-ev/fujitsu-ducted-system-flashing-red-green-fix.png'
tags: ['Fujitsu', 'General', 'Airstage', 'Ducted Heat Pump', 'Flashing Lights', 'Red Green', 'NZ Tech']
instantAnswer: 'Flashing Red and Green lights on a Fujitsu (General/Airstage) ducted system indicate a diagnostic fault code. Before calling a technician, you must perform a Hard Capacity Reset to clear false brownout surges. 1. Go to your outdoor compressor unit. 2. Locate the heavy-duty white "Isolator" switch mounted to the wall beside it. 3. Turn it OFF. 4. Wait exactly 5 minutes for the indoor and outdoor motherboards to completely drain their capacitors. 5. Turn it back ON. If the flashing immediately returns, you must count the exact sequence of red and green flashes to identify the broken hardware part.'
faqs:
  - question: 'What does 2 Red Flashes and 2 Green Flashes mean?'
    answer: 'This specific sequence (2 Red, 2 Green) almost always indicates a failure of the "Indoor Air Temperature Sensor" located inside the ceiling unit. If a rat has chewed the delicate sensor wire in your roof space, or if the sensor simply died, the system board panics and shuts down to prevent freezing or overheating the ductwork.'
  - question: 'Can I just reset it from the wall controller?'
    answer: 'If your wall controller has an "E:XX" error code on the screen, pressing the Master Reset or ACL button with a paperclip will reboot the remote, but it will not reboot the massive heavy-duty motherboard in the ceiling. You must cut the 230V AC mains power at the outdoor isolator switch to perform a true hardware reset.'
  - question: 'Why does it only flash when I turn on Heating?'
    answer: 'If the system runs perfectly in Cooling mode but flashes red/green in Heating mode, you likely have a faulty "Reverse Cycle Valve" (4-way valve) inside the outdoor compressor. The valve physically slides to reverse the flow of refrigerant. If it seizes up due to cold weather or lack of lubrication, the computer detects the failure and locks the system.'
  - question: 'Why am I getting constant errors after a power cut?'
    answer: 'Fujitsu systems are highly sensitive to dirty electricity. If the New Zealand grid drops and returns quickly, the indoor ceiling unit boot sequence desyncs from the outdoor compressor. The indoor unit attempts to communicate with the outdoor unit before it has turned on, resulting in a false "Communication Error" (often 3 Red, 4 Green flashes).'
---

# Fujitsu Ducted Flashing Red/Green: The Reset

<div class='instant-fix-box'>
  <p>To fix a <strong>Fujitsu Ducted System Flashing Red/Green</strong>: The motherboard has detected a fault and entered safety lockdown. <strong>1. The Master Kill Switch:</strong> Walk outside to the massive compressor. Turn the white wall-mounted Isolator switch to OFF. <strong>2. The Capacitor Drain:</strong> Wait exactly 5 minutes. The heavy-duty capacitors must bleed to zero volts. <strong>3. The Test:</strong> Turn the switch back ON. If the system boots up and blows hot air, it was a power surge glitch. If the flashing returns, you have a hardware failure.</p>
</div>

<AdSenseBlock slot='article-top' />

## The "Disco" of Death

Fujitsu (operating in New Zealand as *General* or *Airstage*) manufacturers some of the most powerful whole-house ducted heat pump systems available. Because the main hardware is hidden inside your ceiling cavity, the only way the system can communicate a breakdown is via the wall controller or the tiny infrared receiver dome on your ceiling. 

If you wake up to a freezing house, and notice the receiver dome is rhythmically **flashing Red and Green** (or Green and Orange depending on the model year), you have a diagnostic fault. 

The heat pump will refuse to start the compressor or blow any air until the fault is either reset or repaired. Before paying an HVAC technician an exorbitant call-out fee to climb into your roof, you must perform a Hard Reset to rule out a software crash. 

## Step 1: The Capacity Hard Reset

New Zealand's electrical grid frequently suffers from micro-dropouts during heavy wind and rain. 

When a Fujitsu ducted system loses power for a fraction of a second, the processor on the indoor motherboard stumbles. It turns back on, tries to talk to the outdoor compressor down the communication wire, gets confused, and instantly throws a false-positive fault code, locking the system down. 

Pressing buttons on your remote control will do nothing. You must dump the system memory. 

1.  Leave your remote control alone. 
2.  Walk outside to the massive, twin-fan outdoor compressor unit. 
3.  Bolted to the brickwork or timber directly next to the compressor will be a heavy-duty, white, weatherproof switch. This is the **Electrical Isolator**. 
4.  Flick this switch firmly downward to the **OFF** position. *(If you cannot find this switch, go to your main household switchboard and turn off the massive breaker labeled "A/C" or "Heat Pump".)*
5.  **Wait 5 Full Minutes.** Do not skip this step. Ducted systems have massive power capacitors. If you turn the switch back on in 30 seconds, the motherboard memory does not actually die, and the software glitch remains trapped. You must wait 5 minutes. 
6.  Flick the Isolator back to **ON**. 
7.  Go inside. The blinking lights should be gone. Use your wall controller to set the heat to 24°C and press ON. 

<AdSenseBlock slot='article-middle' />

## Step 2: Decoding the Flashes

If you performed the 5-minute Hard Reset, and the moment you pressed "ON", the Red and Green lights instantly began flashing again—you have a physical, catastrophic hardware failure. The motherboard is actively measuring a broken component. 

You cannot fix the component yourself without an electrical license, but you can diagnose exactly what broke so the technician brings the correct parts. 

You must stare at the ceiling receiver and carefully count the flashes. The system will flash a specific number of times in one color, followed by a specific number of flashes in the other color, then pause, and repeat. 

*   **2 Red, 2 Green:** Indoor Air Sensor Failure. A rat chewed the delicate thermometer wire inside the ceiling, or the sensor has degraded. (Easy fix, ~$200). 
*   **2 Red, 3 Green:** Pipe Temperature Sensor Failure. The sensor reporting the heat of the copper refrigerant pipes has failed. 
*   **3 Red, 4 Green:** Communication Fault. The thick data wire running between the ceiling unit and the outdoor compressor is severed, or one of the expensive motherboards has been fried by a lightning surge. (Expensive repair, $500–$1,200). 
*   **5 Flashes (of any color):** Active Refrigerant Leak. The system has measured the pipe temperatures and realized the compressor is running, but no heat is being generated. The expensive R32 or R410A refrigerant gas has leaked out of a burst copper fitting. The compressor shuts down to prevent itself from overheating and exploding. 

**Armed with this information**, call your local Fujitsu/General Airstage service agent in New Zealand. Tell them exactly what the flash count is over the phone. A competent technician will immediately know which part to put in their van before they even arrive at your house. 

---

*This guide is part of the ErrorDocs New Zealand Appliance Rescue Series. Written and verified by Kiwi HVAC specialists for 2026 hardware standards.*
