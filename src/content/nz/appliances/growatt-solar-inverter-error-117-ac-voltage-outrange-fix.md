---
title: 'Growatt Solar Inverter Error 117 (Grid Out of Range) Bypass'
description: 'Is your Growatt solar inverter shutting down with Error 117 or an "AC V Outrange" warning? Learn why the New Zealand summer grid voltage is causing it and how to troubleshoot.'
category: 'Appliances'
lastUpdated: 2026-03-05
country: 'nz'
author: 'ErrorDocs Tech Team'
image: '/images/nz-ev/growatt-solar-inverter-error-117-ac-voltage-out-of-range-fix.png'
tags: ['Growatt', 'Solar Inverter', 'Error 117', 'AC Voltage High', 'Grid Out of Range', 'NZ Tech']
instantAnswer: 'If your Growatt inverter displays "Error 117" or "AC V Outrange," it has detected dangerously high voltage coming from the national grid and shut itself off to prevent an explosion. 1. Turn OFF the "Inverter AC Isolator" switch. 2. Turn OFF the "PV Array DC Isolator" switch. 3. Wait exactly 60 seconds until the screen is pitch black. 4. Turn the DC Isolator ON, then the AC Isolator ON. If the error returns immediately, the internal relay is permanently fried. If it works for 2 hours and crashes again at midday, your neighborhood grid voltage is too high.'
faqs:
  - question: 'What does Error 117 actually mean mechanically?'
    answer: 'Error 117 is a fatal internal relay fault. The inverter uses heavy-duty mechanical relays (switches) to connect your solar panels to the New Zealand grid. If the grid voltage spikes wildly, these physical relays can fuse together or burn out. If a hard reboot does not clear Error 117, the motherboard is dead and the unit must be replaced under the 5-year Growatt warranty.'
  - question: 'Why does "AC V Outrange" only happen at midday in summer?'
    answer: 'This is a classic New Zealand solar problem. At 1:00 PM on a sunny January day, every solar panel in your neighborhood is exporting massive amounts of power into the local street transformer. This pushes the street voltage up to 255V or 260V. For safety (under AS/NZS 4777 standards), the Growatt inverter is legally forced to shut down when voltage exceeds 253V, throwing the Outrange error.'
  - question: 'Can I change the inverter settings to bypass the 253V limit?'
    answer: 'Technically yes, using the ShineServer installer software, you can raise the maximum tripping voltage (Vmax) to 265V. However, under New Zealand law, doing this yourself is highly illegal and incredibly dangerous. Modifying grid tie-in regulations can start a fire or electrocute a linesman working on the street poles. Only a registered sparky can legally adjust these parameters.'
  - question: 'Will my lines company fix the high street voltage?'
    answer: 'Yes, if you prove it. You must hire a solar electrician to measure the AC voltage at your inverter box. If the multimeter reads 260V, your electrician will contact Vector, Orion, or Powerco. The lines company will then send a crew to adjust the "tap setting" on your street transformer, lowering the neighborhood voltage and instantly fixing your inverter.'
---

# Growatt Solar Inverter Error 117 (Grid Out of Range) 

<div class='instant-fix-box'>
  <p>To fix a <strong>Growatt Error 117 / AC Outrange</strong>: The inverter is protecting your house from a grid power surge. <strong>1. The Shutdown:</strong> Turn off the AC Isolator switch, then the DC Isolator switch. <strong>2. The Bleed:</strong> Wait 60 seconds for the red fault light to die completely. <strong>3. The Boot:</strong> Turn on the DC Isolator, then the AC Isolator. If the screen reads "Normal," it was a transient grid spike. If Error 117 returns instantly, the internal relay is fried and requires a warranty replacement.</p>
</div>

<AdSenseBlock slot='article-top' />

## The "Too Much Sunshine" Paradox

Growatt is one of the most popular grid-tied solar inverter brands installed across New Zealand roofs. Their job is beautifully simple: take the raw, chaotic Direct Current (DC) from your solar panels, smooth it into precise 230V Alternating Current (AC), and push it into your home's switchboard. 

However, during peak summer in solar-heavy regions like Nelson or Hawke's Bay, these inverters frequently shut completely down, glowing a terrifying red, and displaying a combination of **Error 117**, **AC V Outrange**, or **Error 300**. 

When this happens, your house stops using the free solar power on your roof and immediately reverts to pulling expensive power from the grid. 

Here is why your inverter is shutting down, and how to determine if the machine is physically broken or simply doing exactly what it was engineered to do. 

## The AS/NZS 4777.2 Safety Lockdown (AC Outrange)

If your Growatt inverter displays **AC V Outrange** (AC Voltage Out of Range), the problem is almost certainly not your solar panels or the inverter itself. The problem is your neighborhood electrical grid. 

In New Zealand, the standard household electrical supply is exactly 230 Volts. 

However, on a perfectly clear, sunny day at 1:00 PM in January, every house on your street with solar panels is generating maximum electricity. Because nobody is home using that power, it all rushes backwards into the local street transformer. This sudden tidal wave of raw electricity forces the neighborhood voltage to spike upwards—often hitting 255V or 260V. 

Under strict **New Zealand Safety Standards (AS/NZS 4777.2)**, if the incoming grid voltage exceeds 253V, your inverter is legally required to instantly disconnect itself from the grid. It acts as an emergency circuit breaker to prevent high voltage from frying your expensive kitchen appliances. 

It shuts down, flashes red, and throws the **AC Outrange** error. 

### How to Fix High Grid Voltage
You cannot safely bypass this. If you read internet forums suggesting you alter the "Vmax" or "V10" settings via the ShineServer software, **do not do it**. Raising the trip-limit to 268V is illegal in New Zealand without explicit written permission from your lines company. It can literally electrocute a technician working on down-the-street powerlines. 

**The Legal Fix:**
1. Hire a registered Master Electrician. 
2. Have them measure the AC terminals at the inverter with a highly calibrated multimeter during peak sunlight. 
3. If the reading is above 253V, the electrician will file an official "High Voltage Complaint" with your local lines company (e.g., Vector, Orion, WEL Networks). 
4. The lines company will send a heavy-machinery crew to your street to physically scale the transformer pole and lower the "Tap Setting," reducing the voltage for the entire street. Your inverter will never crash again. 

<AdSenseBlock slot='article-middle' />

## Error 117: The Fatal Relay Death

If your Growatt is throwing **Error 117**, the situation is vastly more severe. 

Error 117 translates to an "Internal Relay Fault." Deep inside the inverter, there are heavy-duty mechanical switches (relays) that physically clack open and shut to connect the solar current to your house. 

If your neighborhood routinely suffers from wild grid voltage fluctuations, or rapid power cuts during winter storms, the massive electrical arcing can slowly melt these physical relays, fusing the metal contacts together. 

### The Diagnostic Reboot
You must perform a cold reboot to ensure the microprocessor did not simply glitch during a brownout. 

1.  Find the red switch near your switchboard labeled **Inverter AC Isolator**. Turn it **OFF**. 
2.  Find the switch directly underneath the inverter box labeled **PV Array DC Isolator**. Turn it **OFF**. 
3.  Wait. The Growatt screen will stay illuminated for about 30 seconds as the capacitors bleed out. Wait until the screen goes completely black. 
4.  Reverse the order: Turn the **DC Isolator ON**, then turn the **AC Isolator ON**. 

The inverter will begin its 60-second countdown compliance check. 

*   **If it connects and reads "Normal":** A micro-surge confused the relay timing. You are fine. 
*   **If Error 117 returns instantly:** The mechanical relay is permanently welded shut or burned out. The motherboard is dead. 

**The Repair:** Do not attempt to open the Growatt chassis. It holds lethal DC voltage even when the sun goes down. Most Growatt inverters in New Zealand feature a standard 5-year or 10-year warranty. You must contact your original solar installation company. They will require a photo of the "Error 117" screen and your installation invoice to process a free hardware swap from the manufacturer. 

---

*This guide is part of the ErrorDocs New Zealand Appliance Rescue Series. Written and verified by Kiwi appliance specialists for 2026 hardware standards.*
