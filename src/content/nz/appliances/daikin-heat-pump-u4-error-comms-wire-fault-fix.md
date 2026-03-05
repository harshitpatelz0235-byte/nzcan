---
title: 'Daikin Heat Pump U4 Error: The Comms Wire Trick Techs Use'
description: 'Is your Daikin Heat Pump blowing warm air with a flashing U4 error code? Learn how to diagnose the Communication Wire failure between the indoor and outdoor units.'
category: 'Appliances'
lastUpdated: 2026-03-05
country: 'nz'
author: 'ErrorDocs Tech Team'
image: '/images/nz-ev/daikin-heat-pump-u4-error-comms-wire-trick-fix.png'
tags: ['Daikin', 'Heat Pump', 'U4 Error', 'Communication Fault', 'Comms Wire', 'NZ Tech']
instantAnswer: 'A Daikin U4 error code means the indoor head unit cannot communicate with the heavy outdoor compressor. 1. Turn off the heat pump at the wall for 5 minutes, then turn it back on. This resets the internal digital handshake. 2. If U4 returns immediately, the "Comms Wire" (specifically Cable #3 running between the inside and outside units) is severed, corroded, or picking up electrical interference. A technician must test the DC voltage on Wire 3; if the wire is intact, the outdoor PCB (motherboard) has failed.'
faqs:
  - question: 'What does U4 actually stand for?'
    answer: 'In Daikin diagnostic terminology, U4 stands for Transmission Error between Indoor and Outdoor Unit. The two units act like two computers talking over a network cable. If that cable is cut by a rat, severed by a weedwhacker, or incorrectly grounded by a sloppy installer, the indoor unit panics, shuts off the compressor, and throws the U4 code.'
  - question: 'Can I just reset the remote to fix it?'
    answer: 'Usually no. While a hard reboot (turning off the main circuit breaker for 5 minutes) can sometimes clear a temporary software glitch caused by a power surge, a persistent U4 error is almost always a physical hardware failure. The wire is literally broken, or the circuit board receiving the signal is dead.'
  - question: 'Why did my new heat pump suddenly get a U4 error after raining?'
    answer: 'This implies water ingress. If your installer used cheap wire nuts or electrical tape to splice two pieces of communication wire together outside, rainwater has seeped into the splice. The water shorts the 16-volt DC communication signal to ground, instantly causing a U4 transmission failure. Comms wires should never be spliced.'
  - question: 'How much does it cost to fix a U4 error in New Zealand?'
    answer: 'If it is just a chewed wire under your house, an HVAC technician can run a new length of 4-core stranded wire for about $150 to $250. However, if the electrical surge that caused the U4 error actually fried the outdoor PCB (Printed Circuit Board), a replacement motherboard from Daikin New Zealand will cost upwards of $800 to $1,200 installed.'
---

# Daikin Heat Pump U4 Error: The Comms Wire Trick

<div class='instant-fix-box'>
  <p>To diagnose a <strong>Daikin U4 Error (Transmission Fault)</strong>: The indoor unit cannot talk to the outside unit. <strong>1. The Handshake Reset:</strong> Go to your switchboard, turn off the Heat Pump breaker for 5 minutes, and turn it back on. <strong>2. The Visual Inspection:</strong> Walk outside to the massive compressor. Look for heavily corroded wires, exposed copper where the cable enters the unit, or evidence of rats chewing the grey conduit. <strong>3. The Wire 3 Trick:</strong> The U4 error is nearly always a failure of "Terminal 3," the dedicated DC signal wire. If the wire is visibly cut, it must be replaced.</p>
</div>

<AdSenseBlock slot='article-top' />

## The "Deaf and Blind" Heat Pump

Daikin is heavily marketed in New Zealand as the premium, ultra-reliable choice for home heating. However, they are incredibly sensitive to electrical interference and poor installation practices. 

If your Daikin heat pump suddenly stops blowing hot air, the green operational light on the indoor unit begins flashing, and your remote control displays the dreaded **U4 Error Code**, you have lost the "Comms Link."

Modern Inverter heat pumps are not just "On/Off" machines. The indoor unit acts as the brain, constantly sending complex digital speed requests to the outdoor compressor to save energy. It sends these requests down a single, dedicated strand of copper wire. 

If that wire is damaged, the indoor brain goes deaf and blind. For safety, it shuts the entire system down and throws the U4 code. Here is how HVAC technicians diagnose the failure without guessing.

## Step 1: The "Digital Handshake" Reset

Before paying a $180 callout fee, you must rule out a software crash. 

During heavy electrical storms or winter brownouts, the microprocessors inside the Daikin units can temporarily desync. They fail to perform their initial "digital handshake" when turning on. 

1.  Do not use the remote control. 
2.  Walk to your house's main electrical switchboard. 
3.  Locate the large breaker switch labeled **Air Con** or **Heat Pump**. 
4.  Flick it to the **OFF** position. 
5.  Wait a minimum of **5 full minutes**. This allows the massive capacitors on the Daikin outdoor motherboard to drain their standby voltage completely, forcing a cold reboot. 
6.  Flick the breaker back **ON**. 
7.  Wait 2 minutes, then press ON on the remote. 

If the heat pump whirs to life and the U4 error is gone, it was a transient micro-surge. If the U4 immediately returns, you have a physical hardware failure. 

<AdSenseBlock slot='article-middle' />

## Step 2: The Physical Wiring Inspection

The communication cable running between the indoor head unit and the outdoor compressor usually contains four colored wires. Terminals 1 and 2 supply heavy AC power. **Terminal 3 is the delicate DC communication wire.** 

A staggering number of U4 errors in New Zealand are caused by physical damage to this specific grey cable running down the side of your house or under your floorboards. 

**What to look for:**
*   **The Weedwhacker Strike:** Walk outside and inspect where the grey electrical conduit meets the outdoor compressor. Did you accidentally graze the cable while using a line trimmer on the garden? A tiny nick in the insulation will expose Terminal 3 to moisture, shorting the signal. 
*   **The Rat Buffet:** In winter, rats aggressively seek warmth. They often nest underneath the outdoor Daikin unit and chew through the soft insulation of the communication wires. 
*   **The Illegal Splice:** If your house was recently renovated and the builder had to move the heat pump, they may have cut the wire and twisted it back together using cheap electrical tape. Daikin communication signals are incredibly sensitive; "splicing" creates massive electrical resistance that destroys the data packets, triggering a U4. 

## Step 3: The Technician's "Multimeter Trick"

If the wire looks perfectly intact, the failure lies within the expensive indoor or outdoor computer boards (PCBs). 

When a Daikin technician arrives, they will not guess which board is broken. They use a specific "Wire 3 Multimeter Trick" to prove it mathematically. 

1.  The technician turns on the power and opens the indoor unit. 
2.  They detach Wire 3 (the signal wire) from the indoor terminal block. 
3.  They place their multimeter probes between Terminal 3 and the Ground screw. 
4.  **The Diagnosis:** The multimeter must read a fluctuating DC voltage (constantly bouncing between 12V and 54V). 
    *   If it reads **0 Volts**, the *Indoor* motherboard is dead and must be replaced. 
    *   If it is bouncing correctly at 54V indoors, the technician walks outside, detaches Wire 3 out there, and repeats the test. If there is no voltage outside, the wire itself is broken inside the wall. If the voltage arrives perfectly outside but the machine won't turn on, the *Outdoor* motherboard is dead. 

### A Warning About "Shielded" Wire 
If you live near a large radio transmission tower or high-voltage power lines, your U4 error might be caused by electromagnetic interference. Daikin requires installers to use "Stranded Shielded" comms wire in high-noise areas, and crucially, *only ground the shield at the outdoor unit*. If an amateur installer grounded the shield at both ends, it creates a "ground loop antenna" that sucks in radio interference and continually crashes the Daikin data signal, causing endless phantom U4 errors.

---

*This guide is part of the ErrorDocs New Zealand Appliance Rescue Series. Written and verified by Kiwi HVAC specialists for 2026 hardware standards.*
