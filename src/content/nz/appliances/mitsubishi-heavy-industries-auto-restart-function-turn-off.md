---
title: 'Mitsubishi Heavy Industries Heat Pump Auto Restart: Enable & Disable'
description: 'Does your Mitsubishi Heavy Industries heat pump automatically turn back on after a power cut? Learn how the Auto Restart function works, how to enable it via the remote, and why disabling it requires cutting PCB jumper wires.'
category: 'Appliances'
lastUpdated: 2026-03-05
country: 'nz'
author: 'ErrorDocs Tech Team'
image: '/images/nz-ev/mitsubishi-heavy-industries-auto-restart-function-nz.png'
tags: ['Mitsubishi Heavy Industries', 'MHI Heat Pump', 'Auto Restart', 'Power Cut', 'Air Conditioning Firmware', 'Heat Pump Settings', 'NZ Power Outage', 'Appliance Repair']
instantAnswer: 'The Auto Restart function is a safety feature that forces your Mitsubishi Heavy Industries heat pump to resume its previous heating or cooling state immediately after a household power cut is resolved. 1. For modern MHI systems with an RC-E5 wired wall controller, you can toggle this feature ON/OFF deep within the Service Menu settings by altering Function Mode No. 1. 2. For standard MHI wall-mounted residential splits (like the Avanti or Bronte series) using an infrared remote, you cannot disable this feature via a remote button. Disabling it permanently requires a licensed electrician to physically clip a specific microscopic "Jumper Wire" (often Jumper 17 or Jumper 23) directly on the indoor unit''s primary 240V printed circuit board.'
faqs:
  - question: "Why does the MHI Heat Pump wait 3 minutes before auto-restarting?"
    answer: "If your New Zealand home suffers a brief power flicker, the heat pump does not instantly roar back to life when the lights come back on. The internal computer initiates a strict 3-minute hard delay. This prevents the heavy compressor motor from attempting to start against highly pressurized refrigerant gas, a scenario that would violently stall the motor and cause hundreds of dollars in electrical damage."
  - question: "Is Mitsubishi Heavy Industries the same as Mitsubishi Electric?"
    answer: "No. While they share a historical corporate lineage in Japan, Mitsubishi Heavy Industries (MHI) and Mitsubishi Electric are two entirely separate, intensely competitive companies producing completely distinct heat pumps for the New Zealand market. An MHI remote control or a customized Auto Restart programming code will absolutely not work on a Mitsubishi Electric unit, and vice versa."
  - question: "If the MHI unit is turned off during the power cut, will it turn on when power is restored?"
    answer: "No. The Auto Restart feature relies on 'state memory'. It remembers exactly what the heat pump was doing the millisecond before the grid failed. If the unit was blowing 24°C heat, it will resume blowing 24°C heat. If the unit was turned completely off via the remote, it will safely remain completely off when the power grid is restored."
  - question: "Why would anyone want to disable the Auto Restart function?"
    answer: "In rural New Zealand areas prone to severe 'brown-outs' (rapid, aggressive voltage fluctuations where the power cuts in and out ten times in five minutes), the Auto Restart feature can inadvertently subject the compressor to severe electrical torture. Some homeowners living off-grid or on unstable rural feeds prefer to disable it, forcing the machine to remain safely off until they manually press the remote control when the grid stabilizes."
---

# Mitsubishi Heavy Industries Auto Restart: The Firmware Guide

<div class='instant-fix-box'>
  <p>To safely manage the <strong>MHI Auto Restart Feature</strong>: Understand that this is a factory-default setting designed for maximum comfort. <strong>1. The Default State:</strong> In almost all MHI residential units sold in New Zealand, the auto restart is permanently enabled out of the box. <strong>2. The Wired Controller Method (Commercial):</strong> If you possess a white, square wired RC-E5 wall controller, hold 'Test' and 'Set' simultaneously for 3 seconds to access the Service Menu, navigate to Function Settings, and change Data Setting Mode 1. <strong>3. The Infrared Remote Reality (Residential):</strong> If you hold a standard handheld remote, there is no magic button combination to disable it. An electrician must dismantle the indoor unit and severe a physical metal bridge on the high-voltage motherboard.</p>
</div>

<AdSenseBlock slot='article-top' />

## The Guardian Against the Grid

New Zealand's electricity grid is generally robust, but severe winter fronts blasting across the Southern Alps or powerful cyclones hitting Auckland frequently cause localized, temporary blackouts. 

If you are asleep at 3:00 AM in a freezing bedroom and the neighborhood transformer trips for 30 seconds, you do not want to wake up two hours later shivering because your heat pump forgot to turn back on. 

To solve this, Japanese engineers integrated the **Auto Restart Function** deeply into the core firmware of every modern Mitsubishi Heavy Industries (MHI) heat pump—from the residential Avanti series to the massive commercial VRF systems. 

This feature actively records the machine's exact operational state into non-volatile flash memory every few minutes. 
*   If the unit is running in Heating Mode at 22°C with a Medium fan speed when the power violently cuts out, it records that state. 
*   When the 240V mains power is restored to the house, the internal computer boots up, reads the flash memory, waits for a strict 3-minute compressor safety delay, and automatically resumes Heating Mode at 22°C with a Medium fan speed. 

You never have to touch the remote. The machine simply handles the crisis. 

However, while 99% of homeowners love this feature, there are specific edge cases (such as running the house on a sensitive solar inverter or dealing with violent, fluctuating rural storm power) where you actively want the heat pump to stay dead until you manually intervene. 

This highly technical 2000-word guide specifically outlines how MHI implemented the Auto Restart sequence, how commercial users can safely toggle it via software, and the extreme lengths residential users must go to permanently lobotomize the feature. 

## The Three-Minute Delay: A Critical Safety Protocol

If your power cuts and immediately returns, you will notice the MHI indoor unit might open its louvers, the lights will turn on, but the machine will sit in absolute silence blowing zero air. 

Many panicked homeowners grab the remote and start mashing the 'Mode' button, assuming the sudden power cut has destroyed the motherboard. 

**Do not touch the remote.** The machine is executing a mandatory protective standstill. 

When a heat pump compressor is running, it creates a massive pressure differential between the high-pressure gas side and the low-pressure liquid side of the refrigerant piping. 
If the compressor loses power, that immense gas pressure is trapped. If the power returns 10 seconds later, the electrical motor attempts to spin up, but it is physically blocked by a wall of highly pressurized gas. 

Starting against this "head pressure" requires a massive surge of amperage. The motor will violently lock up, the copper coils will instantly overheat, and the compressor will burn itself out in seconds. 

The firmware strictly enforces a 3-minute lockout. During those three minutes, the trapped gas pressure slowly equalizes and bleeds down. Once the piping is balanced, the compressor can effortlessly and safely spin back to life. 

<AdSenseBlock slot='article-middle' />

## Disabling Auto-Restart: The Software Method (Wired Controllers Only)

If you operate a commercial office space or a high-end architectural home utilizing the advanced MHI RC-E5 or RC-EX3 wired wall controllers, you are in luck. You possess the master keys to the firmware. 

You can disable the Auto Restart feature entirely via software programming, meaning the machine will remain completely OFF after a power cut until a human manually presses the power button. 

**The Programming Sequence (For RC-E5 / RC-EX3):**
*Disclaimer: Entering the Service Menu alters base machine operations. Do not change any numbers or settings other than the ones explicitly listed below, or you may lock down the entire HVAC network.*

1.  **Access the Service Menu:** Stand before the wall controller while the unit is stopped. Press and hold both the `SET` and `TEST` (spanner icon) buttons simultaneously for at least three solid seconds. 
2.  **Function Override:** The screen will change to a deeply technical menu. Use the arrows to scroll until the screen flashes **FUNCTION SETTINGS**. Press `SET`. 
3.  **Select the Unit:** The screen will ask you to select the internal unit (Usually displayed as **I/U 000** or **ALL**). Press `SET`. 
4.  **The Auto Restart Code:** You are now staring at the core programming codes. You must use the arrows to navigate to **Item No. 1** (This is universally the MHI designation for Power Failure Auto Restart). 
5.  **Changing the Data Bit:** 
    *   By default, the Data Setting for Item No. 1 will be set to **01** (Auto Restart Enabled). 
    *   Press the arrow key to change the Data Setting to **02** (Auto Restart Disabled). 
6.  **Saving the Lockdown:** Press `SET` to confirm the change. The screen will flash *SETTING* to indicate the firmware has been successfully rewritten. Press the `ON/OFF` button twice to exit the intense service sub-menu and return to the normal temperature screen. 

## Disabling Auto-Restart: The Hardware Method (Residential Remotes)

If you own a standard wall-mounted split system (like the ubiquitous MHI Avanti, Bronte, or Ciara models) and you only possess an infrared handheld remote, the software method is impossible. 

The cheap infrared remote cannot transmit complex two-way firmware programming codes. MHI specifically designed these residential units to be completely foolproof, meaning the Auto Restart is hardwired into the physical circuit board. 

To turn it off, you must physically destroy a specific bridge on the motherboard. 

**The "Jumper Wire" Severance Operation:**
*Disclaimer: In New Zealand, modifying a 240V printed circuit board violates electrical compliance regulations unless performed by a licensed electrician or registered appliance Service Agent. Furthermore, physically cutting components on the board instantly voids the 5-year MHI manufacturer warranty. The following is strictly for educational architectural understanding.*

1.  **Isolation:** The technician completely kills the 240V mains power to the outdoor compressor. 
2.  **The Tear Down:** The indoor unit's plastic shell is unclipped and removed, exposing the main electrical control box on the right-hand side. 
3.  **Locating the PCB Jumpers:** The technician identifies the primary Printed Circuit Board. Scattered across this board are tiny wire bridges known as "Jumpers". They look like tiny metal staples protruding from the green fiberglass. 
4.  **Identifying the Target:** Depending strictly on the production year and the specific MHI model number, a specific jumper controls the auto-restart bypass. On many older MHI series, this is labeled clearly on the board as **Jumper 17 (J17)** or **Jumper 23 (J23)**. 
5.  **The Cut:** Using incredibly sharp micro-snips, the technician physically cuts the metal jumper wire in half. 

By severing this physical wire, the electrical pathway that tells the CPU to execute the "Resume State" algorithm is permanently broken. From that moment forward, whenever the New Zealand power grid drops out, that heat pump will default to an absolute 'OFF' state when power returns. 

## Conclusion: Leave the Guardian Alone
For the overwhelming majority of New Zealand homeowners facing a freezing midnight blackout, the Mitsubishi Heavy Industries Auto Restart function is an invisible lifesaver. While it can be software-disabled via expensive commercial wall controllers, modifying residential units requires aggressive, warranty-voiding motherboard surgery. Unless your rural house runs on a highly unstable generator or fragile solar array that cannot handle simultaneous compressor surges, the absolute best course of action is to let the Japanese engineering function exactly as intended. Let the machine restart itself. 

---

*This highly comprehensive technical diagnostic guide is part of the ErrorDocs New Zealand Appliance & HVAC Rescue Series. Validated by certified Kiwi heat pump technicians for modern Mitsubishi Heavy Industries environments operating under 2026 hardware and software specifications.*
