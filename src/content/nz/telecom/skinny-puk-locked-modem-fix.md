---
title: 'Skinny Broadband: How to Fix a PUK Locked Modem'
description: 'Did you or your kids accidentally enter the wrong SIM PIN into your Skinny Jump or Wireless Broadband modem? Learn how to retrieve your 8-digit PUK code and unlock your internet connection.'
category: 'Telecom'
lastUpdated: 2026-03-05
country: 'nz'
author: 'ErrorDocs Tech Team'
image: '/images/skinny-puk-locked-modem.png'
tags: ['Skinny', 'PUK Code', 'SIM Lock', 'Jump Modem', 'Huawei B315', 'NZ Tech']
instantAnswer: 'If your Skinny modem dashboard says "PUK Required", the SIM card is permanently locked. You cannot guess this code. Find the large plastic credit-card-sized holder that your Skinny SIM card was originally snapped out of. The 8-digit PUK code is printed on the back. Log into the modem at 192.168.1.254, enter the 8-digit PUK code, and the modem will ask you to create a brand new 4-digit PIN (e.g., 1234) to unlock it.'
faqs:
  - question: 'What happens if I type the PUK code wrong?'
    answer: 'You have exactly 10 attempts to enter the correct PUK (Personal Unblocking Key) code. If you type the wrong 8-digit code 10 times in a row, the SIM card is permanently, irreversibly incinerated by its own internal security chip. You must order a brand new replacement SIM card from Skinny.'
  - question: 'I threw away the plastic SIM card holder. What do I do?'
    answer: 'Do not panic. If you bought a standard Skinny mobile SIM, you can login to your Skinny dashboard online to view the PUK. However, for Skinny Jump or Wireless Broadband SIMs, you must call Skinny Support on 0800 4 SKINNY (0800 475 466). Tell them your account number, and they will run a security check and read the PUK code out to you.'
  - question: 'Why does the modem ask for a PIN in the first place?'
    answer: 'Skinny enables a 4-digit PIN restraint on standard SIM cards to prevent theft. If someone stole the SIM out of your modem and put it in their phone, they could theoretically use your data. The PIN prevents unauthorized hardware swaps.'
  - question: 'How do I stop the modem from asking for the PUK/PIN?'
    answer: 'Once you successfully unlock the modem using the PUK code and set a new 4-digit PIN, go into the modems Advanced Settings > Mobile Network > SIM Management. Look for a toggle switch called "PIN Verification" and turn it officially OFF. The modem will never bother you for a password again after a reboot.'
---

# Skinny Broadband: How to Fix a PUK Locked Modem

<div class='instant-fix-box'>
  <p>To unlock a PUK-locked Skinny Broadband modem: You need the 8-digit PUK code printed on the original plastic SIM packaging (or from calling <strong>0800 475 466</strong>). Connect to the modem's Wi-Fi. Open a browser and go to <strong>192.168.1.254</strong>. The modem dashboard will immediately pop up a "PUK Code Required" box. Enter the 8-digit PUK into the first box. In the second and third boxes, you must create a brand new 4-digit PIN (e.g., <strong>0000</strong>). Click Apply.</p>
</div>

<AdSenseBlock slot='article-top' />

## The "Curious Kid" Disaster

Skinny Wireless Broadband modems (like the Huawei B315 or B618) are entirely reliant on a tiny plastic SIM card slotted into the bottom or the back of the unit. 

Because the modems are often placed in the centre of the lounge, they are highly susceptible to being touched by curious toddlers or bored teenagers playing "IT Support." 

If a child takes the SIM card out, puts it into an iPad, and types the incorrect 4-digit security PIN three times in a row, the SIM card's internal microchip triggers a severe security lockdown. 

When you put the SIM card back into the Skinny modem, the main signal light will glow a furious, solid red. If you attempt to log into the modem dashboard on your laptop to see what is wrong, you will hit a massive, unavoidable brick wall:

**"SIM Card Locked. PUK Code Required."**

You have zero internet. Here is what the PUK code is, why you must not guess it, and how to permanently unlock your modem.

## What is a PUK Code?

PUK stands for **Personal Unblocking Key**. 

When you type the standard 4-digit PIN wrong three times, the SIM card assumes it has been stolen by a thief. It completely locks the operating system. 

To prove you are the genuine owner of the SIM card, you must provide the master override password: the PUK code. 

*   The PUK code is **exactly 8 digits long**.
*   It contains only numbers (no letters).
*   It is completely unique to your specific physical SIM card. My Skinny PUK code will not unlock your Skinny SIM card.

**Crucial Warning:** You have exactly 10 attempts to enter the PUK code correctly. Do not guess it. Do not type `12345678`. Do not type `00000000`. If you fail 10 times, the SIM card physically destroys its own internal circuitry. It becomes a permanently dead piece of plastic, and you will have to wait three days for Skinny to mail you a blank replacement SIM.

<AdSenseBlock slot='article-middle' />

## Step 1: Retrieving the 8-Digit PUK

Because you cannot guess the number, you have to find it. You have two options, depending on how incredibly organized you are.

### Option A: The Original Packaging (Fastest)
When Skinny originally couriered the modem to your house, the SIM card came snapped inside a large, credit-card-sized piece of plastic. Most people throw this plastic card in the bin immediately. 

If you are the type of person who throws all tech manuals into a kitchen drawer, go look in that drawer. 

Flip the large piece of plastic over. Below the barcode, you will see a scratch-off panel or printed text clearly labeled **PUK:** followed by 8 distinct numbers. That is your master key.

### Option B: Calling Skinny Support (Most Common)
If the original packaging was thrown away in 2021, you must call Skinny Support. 

1.  Use your mobile phone to call **0800 4 SKINNY (0800 475 466)**.
2.  Tell the automated menu you need Technical Support.
3.  When a human answers, say: *"My broadband modem SIM card is PUK locked. I need you to read me the PUK code."*
4.  The agent will ask for your Skinny account number or the phone number associated with the broadband account. They will then ask a security question (e.g., your Date of Birth or a secret PIN).
5.  Once verified, the agent looks at the master database and reads the 8-digit code out to you. Write it down carefully.

## Step 2: Unlocking the Modem Dashboard

You have the 8-digit number. Now you have to apply it to the modem.

1.  Leave the Skinny modem turned on, with the locked SIM card inserted.
2.  Connect your laptop or mobile phone to the Skinny Wi-Fi network. *(Note: The Wi-Fi will still work locally, but you will have no internet).*
3.  Open Safari, Chrome, or Edge. 
4.  Type **192.168.1.254** into the address bar and hit enter.
5.  Usually, you would have to log in with `admin` and a password. However, because the SIM is locked, the modem intercepts you immediately with a mandatory "Unlock SIM" pop-up.

### Filling Out the 3 Boxes correctly
The pop-up screen is notoriously confusing because it asks for three things. 

*   **Box 1 (PUK Code):** Type the 8 digits you got from the plastic card or the Skinny phone agent.
*   **Box 2 (New PIN):** The router is asking you to invent a brand new, fresh 4-digit PIN code to replace the one your kid forgot. Type something easy, like **0000** or **1234**. 
*   **Box 3 (Confirm PIN):** Retype the exact same 4-digit PIN (e.g., **0000**).

Click the **Apply** or **Unlock** button. 

The modem will pause for three seconds. The screen will refresh, and you will be dropped onto the main dashboard. Look at the modem in the lounge; the red light will turn blue/cyan. The internet is back.

## Step 3: Disabling the PIN Forever

Once you have rescued the modem, you should ensure this situation never happens again.

A SIM PIN makes sense for a smartphone that you carry on the train, in case you get mugged. A SIM PIN makes absolutely no sense for a broadband modem bolted to a shelf in your lounge. It just creates tech support headaches.

1.  You should now be logged into the modem dashboard at `192.168.1.254`.
2.  Navigate to **Advanced Settings** (or the 'Settings' tab at the top).
3.  Click on the **Dial-up** or **Mobile Network** menu on the left.
4.  Select **PIN Management** or **SIM Management**.
5.  You will see a toggle or a dropdown box labeled "PIN Request" or "PIN Verification". 
6.  Change this setting to **Disable** or **Off**.
7.  The modem will ask you to prove you have the right to do this by entering your 4-digit PIN one last time. Enter the PIN you created in Step 2 (e.g., `0000`).
8.  Click **Apply**.

From now on, the SIM card is permanently "unlocked". If the modem is rebooted, loses power, or a child pulls the SIM card out and pushes it back in, it will immediately boot up and connect to the internet without ever stalling or demanding passwords. 

Your Skinny broadband connection is now fully automated.

---

*This guide is part of the ErrorDocs NZ Telecom Rescue Series. Written and verified by NZ broadband specialists for 2026 hardware standards.*
