---
title: 'Simpson Ezi Set Lid Lock Flashing: Diagnosis & Safey Bypass'
description: 'Is your Simpson Ezi Set washing machine flashing the lid lock light and refusing to spin? This 2000-word New Zealand repair guide explains how to fix bent strikers, diagnose broken solenoids, and why electrical wire bypassing is dangerous.'
category: 'Appliances'
lastUpdated: 2026-03-05
country: 'nz'
author: 'ErrorDocs Tech Team'
image: '/images/nz-ev/simpson-ezi-set-lid-lock-flashing-bypass-fix-nz.png'
tags: ['Simpson', 'Ezi Set', 'Lid Lock Flashing', 'Washing Machine Error', 'Spin Wash Fault', 'Electrolux', 'NZ Appliance Repair']
instantAnswer: 'A flashing Lid Lock light on a Simpson Ezi Set indicates the main computer cannot confirm the lid is physically secured, so it aborts the spin cycle to prevent injury. 1. The Striker Check: Open the lid and look at the plastic "finger" (the striker) hanging from the lid. If it is snapped off or bent, the lock cannot trigger. 2. The Soap Scum Jam: Look into the rectangular hole on the machine base. Shine a torch inside. If it is packed with hardened washing powder, carefully pick it out with a toothpick. 3. The Diagnostics Reset: Unplug the machine from the wall for 10 minutes to clear the motherboard memory. If it still flashes upon restart, the internal magnetic solenoid has burned out and the $45 lock mechanism must be replaced.'
faqs:
  - question: "Can I just cut the wires and permanently bypass the Simpson lid lock?"
    answer: "Technically yes, but practically and legally, no. The Simpson lid lock uses a 3-wire or 4-wire PTC system, communicating directly with the main motherboard. If you incorrectly twist the wires together, you will instantly send 240V back into a low-voltage sensor circuit, permanently frying the $300 main computer board in a split second. Furthermore, an unbypassed top-loader spinning at 850 RPM can break a child's arm if they reach inside."
  - question: "Why does the Simpson Ezi Set click three times before flashing the error?"
    answer: "Those three clicks are the sound of the motherboard desperately trying to fire the mechanical solenoid pin through the lid striker. It sends three rapid pulses of 240V electricity. If the internal sensor does not register the pin passing completely through the hole, it gives up on the third try, aborts the cycle, and flashes the red lid lock light."
  - question: "Are Simpson and Electrolux the same company in New Zealand?"
    answer: "Yes. Electrolux acquired the Simpson brand many years ago. Therefore, when searching for replacement lid locks in New Zealand or Australia, you will often receive a part in an Electrolux-branded box. The internal mechanisms, wiring harnesses, and error codes are largely identical to mid-range Electrolux top loaders from the same era."
  - question: "How much does a new Simpson lid lock cost to fix?"
    answer: "If you purchase the part from a New Zealand appliance spares retailer (like Need-A-Part), a genuine Electrolux/Simpson lid lock replacement mechanism costs between $45 and $65 NZD. If you pay a specialized appliance technician to drive to your house, diagnose it, supply the part, and install it, expect an invoice closer to $220 to $280 NZD."
---

# Simpson Ezi Set Lid Lock Flashing: The Complete Diagnosis Guide

<div class='instant-fix-box'>
  <p>To safely resolve a <strong>Simpson Ezi Set Flashing Lid Lock</strong>: Your machine is protecting you from a high-speed spinning drum. <strong>1. The Realignment:</strong> Grab the open lid with both hands and gently torque it left or right. Often, heavy wet towels bend the lid hinges, causing the plastic striker to miss the lock hole by three millimetres. <strong>2. The Cleaning:</strong> Dip a cotton swab in warm water and clean out the rectangular lock hole on the machine base. Caked-on fabric softener acts like cement, jamming the locking pin. <strong>3. The Hard Reset:</strong> Unplug the machine from the New Zealand wall socket for exactly 10 minutes to bleed the internal motherboard capacitors and reset the safety logic.</p>
</div>

<AdSenseBlock slot='article-top' />

## The Guardian of the Spin Cycle

The Simpson Ezi Set has been a ubiquitous staple in New Zealand and Australian laundries for over a decade. It is celebrated for its brutal simplicity, heavy-duty agitator, and aggressive, reliable washing mechanics. It is the quintessential "workhorse" top-loader. 

However, this machine operates under strict, modern international safety regulations governed by its parent company, Electrolux. 

Twenty years ago, top-loading washing machines would happily spin a load of heavy, soaking-wet denim jeans at 800 Revolutions Per Minute (RPM) while the lid was thrown wide open. While this was incredibly convenient for throwing in a forgotten sock mid-cycle, it resulted in thousands of catastrophic injuries globally—particularly to young children who reached into the blur of the spinning drum. 

To eliminate this hazard, Simpson engineers integrated an electro-mechanical **Lid Lock Mechanism** directly into the Ezi Set's primary control sequence. 

When you press Start, the machine reaches the drain-and-spin phase. You will hear a distinct, sharp *CLICK* from the front lip of the machine. The red "Lid Locked" light illuminates solidly on the control panel, and the drum begins to spool up like a jet engine. 

When that system fails, the light flashes relentlessly, the machine beeps, and you are left staring at a tub full of soaking wet clothes that refuse to spin dry. 

This comprehensive, 2000-word technical guide explains exactly how the Simpson Ezi Set locking mechanism works, why they break so frequently, how to naturally bypass temporary alignment faults, and why performing an electrical wire-cut bypass is an incredibly dangerous idea in a New Zealand home.

## Anatomy of the Ezi Set Lock

To fix the problem, you must first understand that the locking mechanism is not a single piece. It is a two-part system relying on absolute millimeter precision. 

### Part 1: The Striker (The Dumb Plastic)
Attached to the underside of the main glass or plastic folding lid is a small, protruding plastic tooth called the **Striker**. When you close the lid, this striker physically inserts itself into a small rectangular slot on the top deck of the washing machine. The striker has a designated hole or notch cut completely through the middle of it. 

### Part 2: The Lock Assembly (The Electrical Brain)
Hidden beneath the top deck of the washing machine, directly under that rectangular slot, is the **Lid Lock Assembly**. This is a complex plastic box containing three vital components:
1.  **A Micro-switch:** To detect if the lid is physically resting in the down position.
2.  **A Solenoid Coil or Wax Motor:** To violently shoot a metal or plastic pin *through* the hole in the striker. 
3.  **A Sensor:** To confirm that the pin successfully made it all the way through the striker and into the receiving bracket. 

## The Sequence of Failure (Why it Flashes)

When an Ezi Set reaches the spin cycle, the motherboard sends a 240V command to the lock assembly. 

If the light begins flashing, it means one of three catastrophic breakdowns has occurred during the handshake sequence:

1.  The machine sent the electrical command, but the **Solenoid Coil** is burned out and dead, so the pin never moved. 
2.  The pin tried to shoot forward, but the **Striker** is bent, broken, or misaligned, so the pin smashed into solid plastic instead of passing through the hole. 
3.  The pin successfully shot through the hole, but the internal **Micro-sensor** is corroded by damp laundry air and failed to tell the main computer that the lock was successful. 

In all three scenarios, the central computer operates on a "Fail-Safe" protocol. If it cannot guarantee with 100% mathematical certainty that the lid is locked, it aborts the 800 RPM spin cycle.

<AdSenseBlock slot='article-middle' />

## Diagnostic Path 1: The Mechanical Obstruction 

Before you write off the washing machine or order expensive parts, you must thoroughly investigate the physical geometry of the lid. Top loaders are notoriously abused appliances. 

### The Bent Hinge Syndrome
If you routinely rest heavy baskets of wet laundry on the open lid, or if someone accidentally leaned heavily onto the open lid while reaching into the drum, the rear metal hinges of the lid have bent outward. 

When you close the lid, it looks perfectly flat to the naked eye. However, the plastic Striker is now sitting 3mm further forward than it was designed to. When the lock assembly fires the security pin, the pin violently strikes the side of the plastic tooth instead of sliding smoothly through the hole. 
*   **The Diagnostic Test:** Close the lid. Press the Start button for the spin cycle. As soon as you hear the machine attempt to lock (*CLICK*), push down firmly and pull the lid slightly *towards* you (towards the front of the machine) with your hands. 
*   **The Result:** If the pin suddenly slides home, the light turns solid red, and the machine begins to spin, your lock is perfectly fine. Your lid hinges are bent. You must carefully manipulate the hinges to realign the striker. 

### The Detergent Cement Block
The rectangular hole on the top deck of the machine is a magnet for disaster. Over five years, spilled liquid fabric softener, powdered detergent dust, and lint slowly cascade down into that tiny hole. 
Because the area is perpetually damp, this chemical mixture hardens into a dense concrete-like substance. The locking pin eventually becomes encrusted in this cement, dragging heavily every time it tries to move, until it finally seizes entirely. 
*   **The Fix:** Unplug the machine. Dip an old toothbrush or a cotton swab in hot, soapy water. Vigorously scrub the inside of the rectangular lock hole. Use a toothpick to scrape out the corners. Allowing the pin to move friction-free will often instantly cure a flashing error light.

### The Snapped Striker
Open the lid and look at the plastic tooth. Simpson/Electrolux strikers are merely molded plastic. If a frustrated teenager slammed the lid down violently while the lock pin was accidentally extended, the striker will snap clean off. 
*   **The Fix:** If the tooth is missing or broken in half, the machine can never lock. You do not need a technician. You can order a replacement generic Ezi Set Striker hook for less than $15 NZD. It usually attaches to the underside of the lid with two simple Phillips-head screws. 

## Diagnostic Path 2: The Dangerous Electrical Bypass Myth

If you search the dark corners of the internet for a "Simpson Ezi Set Lid Lock Bypass," you will find hundreds of forum posts suggesting you simply *"cut the three wires going to the lock and twist the red and black ones together."*

If you are living in a modern New Zealand home, **do not execute this electrical bypass.** 

### Reason 1: The Sizzling Motherboard
Older, primitive washing machines from the 1990s used a simple 2-wire serial switch. If you connected those two wires, the machine believed the lid was closed forever. 

Modern Simpson Ezi Set (Electrolux) machines use a 3-wire or 4-wire **Active Resistance System**. The main computer sends a pulsing voltage down one wire and expects to see a very specific, altered voltage return down a sensor wire, proving the solenoid has physically moved. 

If you cut those wires and twist them together randomly with electrical tape, you are bridging a 240-Volt AC driving circuit directly into a 5-Volt DC low-voltage micro-processor sensor lane. 

The moment you press the Start button, you will hear a loud *POP* from the top console, accompanied by the distinct smell of burning ozone. You have instantly incinerated the main $300 System Control Board. Your machine is now permanently destroyed. 

### Reason 2: The Catastrophic Spin Danger
Even if you theoretically possess the electrical engineering degree required to successfully solder resistors into the wiring harness to trick the computer, you have removed a critical life-safety device from a heavy industrial machine. 

An Ezi Set agitator spinning at 850 RPM generates hundreds of pounds of centrifugal force. If the machine becomes unbalanced and the spinning metal drum violently strikes the outer plastic chassis, you want that lid locked down. 

If the lid flies open during an unbalanced spin without a lock, you risk massive kinetic shrapnel. If a child reaches into an 850 RPM spinning load of wet towels, the towels will instantly wrap around their arm, resulting in devastating traumatic injuries. A $45 replacement part is not worth the liability. 

## Diagnostic Path 3: The Fatal Solenoid Replacement

If the lid is perfectly aligned, the striker is intact, the hole is scrubbed clean, and you have hard-reset the machine by unplugging it from the wall for 10 minutes, but the machine still clicks three times and flashes the red light—the Lid Lock Assembly is electrically dead. 

The copper coil inside the solenoid has burned out, or the internal micro-switch has rusted through. 

### How to Replace the Ezi Set Lid Lock (The Safe DIY Method)

Replacing the lock is a remarkably straightforward 15-minute job that requires exactly one tool: a Phillips head screwdriver. 

1.  **Immediate Isolation:** Unplug the washing machine entirely from the 240V New Zealand wall socket. Pull the plug visibly out. 
2.  **Remove the Console:** At the rear of the machine, behind the top control panel (where the buttons are), there are usually two screws holding the plastic console down. Remove them. 
3.  **Flip the Brain:** Carefully fold the plastic control console forward, resting it face-down on the glass lid. This exposes the underside of the top deck. 
4.  **Locate the Lock:** Looking down from the top, you will immediately see the plastic Lid Lock Assembly bolted to the underside of the deck, directly beneath the rectangular striker hole. 
5.  **Disconnect:** Pull the single white plastic electrical wiring harness plug out of the back of the lock assembly. Note: It only goes back in one way, so you cannot mess this up. 
6.  **Unscrew:** There are two screws holding the lock assembly to the metal deck. Unscrew them. The entire broken black plastic box will fall out into your hand. 
7.  **The Swap:** Take your brand new Electrolux/Simpson replacement lock (Part number easily found via Need-A-Part NZ), screw it firmly into exactly the same position, and click the white electrical plug back into the socket. 
8.  **Reassemble:** Fold the console back down and secure the two rear screws. Plug the machine in. 

Press Start. The machine will perfectly execute a single, dull *CLICK*, the red safety light will illuminate solidly, and your Simpson Ezi Set will joyfully spin your laundry dry for another ten years. 

---

*This highly comprehensive technical guide is part of the ErrorDocs New Zealand Appliance Rescue Series. Validated by certified Kiwi whitewares repair technicians for modern laundry environments operating under 2026 hardware and software specifications.*
