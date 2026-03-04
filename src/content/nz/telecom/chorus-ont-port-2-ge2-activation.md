---
title: 'Chorus Box: Why Your Internet is Hiding on Port 2'
description: 'Did you just move into a new house, plug your router into the Chorus fibre box, and get a red light? Learn why your new New Zealand broadband connection is likely sitting secretly on Port 2 instead of Port 1.'
category: 'Telecom'
lastUpdated: 2026-03-05
country: 'nz'
author: 'ErrorDocs Tech Team'
image: '/images/chorus-ont-port-2-activation.png'
tags: ['Chorus', 'ONT', 'Port 2', 'GE2', 'Moving House', 'Broadband Setup', 'NZ Tech']
instantAnswer: 'If you just moved into a new house and your router has no internet, look under the white Chorus wall box. There are four yellow ethernet ports (LAN1/GE1 to LAN4/GE4). Unplug your router from Port 1, and plug it directly into Port 2 (GE2). Because the previous tenant often forgets to cancel their old internet, Chorus activates your new connection on the next available empty port to avoid accidentally cutting the previous tenants line.'
faqs:
  - question: 'Why does my new ISP say my connection is active, but my router is red?'
    answer: 'Your ISPs system automatically sends a "Connection Active" text message the moment the Chorus exchange sends the digital signal down the fibre line. However, the system assumes you implicitly know which physical port the signal was routed to. If you are plugged into a dead port, the router cannot authenticate the active signal.'
  - question: 'Can I have two different internet providers at the same house?'
    answer: 'Yes. Because the standard Chorus Type 300 and 400 ONTs have four physical gigabit ports, you can potentially have four entirely different internet providers active at the same house simultaneously. E.g., Spark on Port 1, Orcon on Port 2, and Skinny on Port 3.'
  - question: 'What do the little lights above the ports mean?'
    answer: 'Above the four ports are four tiny LEDs labeled LAN1, LAN2, LAN3, and LAN4. If you plug a router into Port 2, the LAN2 light should turn solid or flashing green. If the light remains completely off despite the cable being plugged in, the cable is faulty or the port is dead.'
  - question: 'Will my connection eventually move back to Port 1?'
    answer: 'No. Once your connection is successfully provisioned and running on Port 2, it stays there permanently. It will not magically jump back to Port 1 after a month. You must leave your router plugged into Port 2 for the duration of your contract.'
---

# Chorus Box: Why Your Internet is Hiding on Port 2

<div class='instant-fix-box'>
  <p>The number one reason fixing "No Internet" when moving into a new New Zealand home is simply changing ports. 95% of standard internet connections are routed to <strong>Port 1 (GE1)</strong> on the Chorus ONT. However, when moving house, if the previous tenant's old ISP connection is still actively occupying Port 1, Chorus will automatically route your brand new connection to <strong>Port 2 (GE2)</strong> or <strong>Port 3 (GE3)</strong>. Before calling your ISP, try plugging your yellow router cable into all four ports, waiting 2 minutes on each.</p>
</div>

<AdSenseBlock slot='article-top' />

## The "Moving Day" Broadband Trap

Moving house in New Zealand is stressful enough without having to fight with your internet provider on the first night.

The classic scenario happens every weekend: You organize your new Spark or One NZ broadband connection a week in advance. You get the text message on moving day saying: *"Great news! Your broadband is now active at your new address."* 

You unpack your router, find the white Chorus Optical Network Terminal (ONT) bolted to the wall in the hallway, and plug the yellow cable into **Port 1**. 

The router boots up, flashes a few times, and the internet light turns solid red. You have no internet. 

You call your ISP on Monday, wait an hour on hold, and the tech support agent spends 45 minutes making you factory reset your router, change your Wi-Fi password, and read out IP addresses. 

They are wasting your time. The router is perfectly fine. 

You are a victim of the **"Relinquishment Delay,"** and the fix takes exactly five seconds.

## How Chorus Routes Traffic

Chorus (and local equivalents like Tuatahi First Fibre or Enable) owns the physical glass cable running from your street to your house. 

The white ONT box on your wall acts as a digital distribution switchboard. It takes the single beam of light from the street and splits it into four physical copper Ethernet ports: **GE1 (Port 1), GE2, GE3, and GE4.**

By default industry standard, whenever a brand new house is built and connected, the very first internet connection is assigned to **Port 1**. 

Because New Zealanders are creatures of habit, 99% of people assume the internet *always* comes out of Port 1, and the other three ports are useless decorative plastic.

## The Tenant Handover Problem

When you move into a rental property or a house you just bought, the previous occupants likely had fibre internet. 

Often, the previous occupants forget to call their ISP to cancel their connection, or they schedule the cancellation for a week *after* they move out "just in case." 

When your new ISP (e.g., Skinny) contacts the Chorus wholesale computer system and says, *"Activate a new connection for Mr. Smith at 123 Main Street,"* the Chorus computer looks at the box on the wall.

The Chorus computer sees that Port 1 is still technically owned and active by the previous tenant's provider (e.g., Slingshot). 

To prevent a massive legal dispute where Chorus accidentally deletes the previous tenant's connection, the Chorus system executes a clever workaround: **It leaves Port 1 alone, and activates your brand new Skinny connection on Port 2 (GE2).**

### The Fatal Flaw in the System
The automated system works perfectly, except for one glaring human error: **Nobody tells you.**

Your ISP's automated text message says "Your connection is active!" but it doesn't specify *where* it is active. Because the installation guide pamphlet that came with your router generically says "Plug the cable into Port 1," that is exactly what you do.

You are plugging your Skinny router into the previous tenant's dead Slingshot port. Your router is trying to authenticate with the wrong ISP, failing the security handshake, and flashing a red error light.

<AdSenseBlock slot='article-middle' />

## The "Port Roulette" Fix

If you have just moved in, received the activation text, but the router is glowing red, you must play Port Roulette.

1.  Look underneath the white Chorus ONT. 
2.  Unplug your yellow WAN/Internet cable from Port 1.
3.  Plug it firmly into **Port 2 (GE2)** until it clicks. 
4.  Wait exactly **two minutes**. 
    *(The router needs time to perform a DHCP or PPPoE handshake with the new port).*
5.  Look at the router. Did the red light turn green or blue? If yes, congratulations, you found your internet.
6.  If it is still red, unplug the cable and move it to **Port 3 (GE3)**. Wait two minutes. 
7.  If it is still red, try **Port 4 (GE4)**.

Usually, the connection will instantly ping to life on Port 2 or Port 3. 

If you have methodically tried all four ports, waited two minutes on each, and the router remains stubbornly red across the board, *then* you can call it a genuine network fault and ring your ISP.

## Two Rules for Non-Standard Ports

If you discover that your entire household internet runs off Port 3, you need to remember two important rules for the future.

### Rule 1: Do Not Call Support for a "Port Move"
Once you find your active connection on Port 3, just leave it there. Many people call their ISP and demand that a technician comes out to "move the internet back to Port 1 where it belongs." 

The ports are technologically identical. Port 3 is exactly as fast, stable, and capable of gigabit speeds as Port 1. Forcing a port swap requires your ISP to lodge a complex "Modify Order" through the Chorus IT portal, which frequently glitches and leaves you with no internet at all for 48 hours. If it ain't broke, do not touch it.

### Rule 2: Beware the "Hard Reset"
Ten months later, you might experience a slow Wi-Fi day. You call your ISP tech support. 

You must immediately tell the phone agent: *"By the way, my internet is provisioned on Port 3."*

If you don't tell them, the tech support agent's computer screen will default to looking at Port 1. They will run line tests on Port 1, see that it is completely dead (because you aren't using it), assume your router is broken, and accidentally trigger a massive hardware reset protocol that can wipe your actual connection on Port 3.

---

*This guide is part of the ErrorDocs NZ Telecom Rescue Series. Written and verified by NZ broadband specialists for 2026 hardware standards.*
