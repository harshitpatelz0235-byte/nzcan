---
title: 'Eastlink Arris DG3270A: Default Admin Password Fails?'
description: 'Are you trying to log into your Eastlink Arris DG3270A router at 192.168.0.1, but the default admin password is not working? Learn the secret "cusadmin" trick and how to factory reset.'
category: 'Telecom'
lastUpdated: 2026-03-05
country: 'ca'
author: 'ErrorDocs Tech Team'
image: '/images/can-telecom/eastlink-arris-dg3270a-password-fails.png'
tags: ['Eastlink', 'Arris DG3270A', 'Admin Password', '192.168.0.1', 'Router Login', 'Canada Tech']
instantAnswer: 'If you cannot log into your Eastlink Arris DG3270A modem at 192.168.0.1, the generic "admin/password" combination will not work. Eastlink uses custom firmware. Try the username "admin" and the password "admin". If that fails, try the username "cusadmin" and for the password, type in the exact Wi-Fi Pre-Shared Key (the default Wi-Fi password) printed on the white sticker on the back of the router. If you still cannot log in, a technician previously changed the password, and you must factory reset the router with a paperclip.'
faqs:
  - question: 'What is the correct IP address for Eastlink modems?'
    answer: 'Unlike Bell (which uses 192.168.2.1) or Rogers (10.0.0.1), the default local IP address for an Eastlink Arris DG3270A gateway is almost always **192.168.0.1**. You must type this directly into the URL bar of your browser, not into a Google Search box.'
  - question: 'Why does "cusadmin" work?'
    answer: 'Arris manufactures modems for dozens of ISPs worldwide. To prevent mass hacking, they use a tiered login system. "admin" is often reserved for Eastlink Tier 2 technicians. "cusadmin" (Customer Admin) is the specific username designated for you, the homeowner, to access the Wi-Fi settings.'
  - question: 'Will a factory reset delete my internet connection?'
    answer: 'No. A factory reset deletes your custom Wi-Fi network name and password, but it does NOT delete the Eastlink coaxial provisioning. Once the modem reboots, it will automatically pull the Eastlink certificates from the coaxial cable and restore your internet access using the factory default Wi-Fi name.'
  - question: 'Can I access the router over Wi-Fi?'
    answer: 'Yes, but if you are experiencing repeated login failures, you should connect your laptop directly to the Arris router using a yellow Ethernet cable. Some custom ISP firmware blocks access to the 192.168.0.1 admin page over Wi-Fi for security reasons.'
---

# Eastlink Arris DG3270A: Default Admin Password Fails?

<div class='instant-fix-box'>
  <p>To fix login failures on an <strong>Eastlink Arris DG3270A</strong> router: The generic manuals are wrong. <strong>1.</strong> Ensure you are at exactly <strong>192.168.0.1</strong>. <strong>2.</strong> Try Username: <code>admin</code>, Password: <code>admin</code>. <strong>3.</strong> If that fails, try Username: <code>cusadmin</code>, Password: <em>[The Wi-Fi password printed on the modem sticker]</em>. <strong>4.</strong> If you still get an error, the password was changed. Leave the modem powered ON. Use a paperclip to hold the tiny <strong>Reset</strong> pinhole on the back for exactly 15 seconds. This wipes the router and restores the sticker passwords.</p>
</div>

<AdSenseBlock slot='article-top' />

## The Frustration of 192.168.0.1

If you are an Eastlink customer in Atlantic Canada or Alberta trying to set up port forwarding for a PlayStation 5, change your DNS servers, or split your 2.4GHz and 5GHz Wi-Fi bands, you must log into the brain of your router. 

For the Arris DG3270A (the tall, black tower Eastlink provides for gigabit internet), this means opening a browser and navigating to **192.168.0.1**.

The login screen appears perfectly. But when you look up the generic Arris manual online, it tells you to type `admin` for the username and `password` for the password. 

You type it in, hit enter, and the page violently shakes, aggressively denying you access. You try it five times until the router locks you out entirely. 

Here is exactly why the generic manuals fail in Canada, and the secret credentials Eastlink flashes onto the firmware before mailing you the box.

## Case 1: The "CUSADMIN" Override

The Arris DG3270A is not a generic, off-the-shelf router; it is an ISP-provisioned Gateway. When Eastlink buys ten thousand of these modems from Arris, they install a custom layer of Canadian firmware over the top.

Part of this firmware is designed to stop hackers from driving down a street, connecting to Wi-Fi networks, and typing `admin/password` to easily hijack thousands of routers.

Eastlink randomizes the backdoor access. 

1.  Look at the large white sticker on the back or bottom of the Arris DG3270A. 
2.  Locate the line that says **Pre-Shared Key** or **Preshared Key**. This is the default Wi-Fi password (usually a long string of random numbers and letters). 
3.  Go to `192.168.0.1`.
4.  For the Username, type: `cusadmin` (short for Customer Admin).
5.  For the Password, type the exact Pre-Shared Key from the sticker. Respect all capital letters.
6.  Hit Enter. In 90% of Eastlink homes, this unique combination will instantly grant you access to the gateway dashboard.

*Note: For very old Eastlink modems, the factory default might still be Username: `admin`, Password: `admin`.*

<AdSenseBlock slot='article-middle' />

## Case 2: The Technician's Ghost

If you have tried `cusadmin`, `admin`, and the sticker password, but the login box continues to reject you, you are facing a human error, not a digital glitch. 

When your internet was originally installed, the Eastlink technician (or the previous tenant if you rent the apartment) logged into the router to set up your custom Wi-Fi network (e.g., "The_Batcave_5G"). 

During that initial setup wizard, the Arris firmware heavily pressured them to change the router's Master Admin Password to something secure. They changed the password, forgot to write it down, and left. 

You are now permanently locked out of your own hardware. 

### The Nuclear Option: The 15-Second Factory Wipe

Because there is no "Forgot Password / Send Email" link on a local router, the only way to regain access is to ruthlessly execute a hard factory reset. This wipes the router's brain clean and restores the passwords printed on the sticker. 

**Warning:** A factory reset will instantly delete your custom Wi-Fi network name and password. Every phone, TV, and smart speaker in your house will drop offline. You will have to reconnect them after the reset.

1.  Leave the Arris DG3270A plugged into the wall and fully powered ON.
2.  Find a straightened paperclip or a SIM-card ejection tool. 
3.  Look at the back of the modem, near where the cables plug in. You will find a tiny, recessed hole labeled **Reset**.
4.  Insert the paperclip. You will feel a distinct physical mechanical "click." 
5.  Press and hold the button down for **15 straight seconds**. 
6.  Watch the front LED lights. After 15 seconds, all the lights will flash simultaneously and turn off. 
7.  Release the paperclip. The router is now rebooting. 

### The Post-Reset Setup

You must be patient. It takes the Arris modem approximately 3 to 5 minutes to fully boot up, re-establish the coaxial connection with the Eastlink street node, and begin broadcasting Wi-Fi again.

1.  Look at the white sticker on the modem.
2.  Connect your laptop or phone to the default **Network Name (SSID)** printed there, using the default **Pre-Shared Key**.
3.  Once connected to the raw Wi-Fi, open your browser and immediately go back to `192.168.0.1`. 
4.  Type Username: `cusadmin`.
5.  Type Password: `[The Pre-Shared Key from the sticker]`.
6.  You will now have God-tier access to the router. The very first screen will force you to create a brand new Admin Password and a new Wi-Fi network name. **Write the Admin Password down on a piece of masking tape and stick it to the side of the router so you never get locked out again.**

---

*This guide is part of the ErrorDocs Canadian Telecom Rescue Series. Written and verified by Canadian broadband specialists for 2026 hardware standards.*
