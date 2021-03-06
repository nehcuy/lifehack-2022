<h1 align="center">
  <strong>LifeHack 2022</strong>
</h1><p align="center">
  <img src="https://raw.githubusercontent.com/nehcuy/lifehack-2022/main/src/utils/images/AppLogo.png" width="184" height="184" />
</p>

A Hackathon Project from LifeHack 2022. Access our WebApp&nbsp;`Lockdown`&nbsp;[here](https://lifehack2022-lockdown.vercel.app/).

Contents:

*   [Problem Statement](#problem-statement)
*   [Rationale](#rationale)
*   [Process](#process)

## **Problem Statement**

Safety:&nbsp;

How can we ensure the safety of our personal property (money/e-banking, data, personal belongings, assets, residences, community spaces etc.)?

## **Rationale**

Drawing inspiration from existing applications that already provide alert messages for mobile phone movement, we decided to take it a step further.&nbsp;

By connecting a mobile phone to a tablet, we can now keep our tablets (which contain lots of personal information) safe from theft.&nbsp;

Once in lockdown mode, any movements detected by the tablet will send an alert to the mobile user that is connected to the tablet through a 4 digit code.

## **Process**

Upon entering the startup screen, choose the device you are on (either a tablet or a mobile phone). Depending on which option you select, you will be brought to two pages:

1.  [Phone](#phone)
2.  [Tablet](#tablet)

### **<ins>Phone</ins>**

Enter the 4 digit code that is shown on the tablet and click&nbsp;`SUBMIT`. You will see a large text box which displays the state the tablet is in (locked down or unlocked).

### **<ins>Tablet</ins>**

The 4 digit code shown on the screen is to be entered onto your mobile phone. Once a connection is established, you will then enter the [Lockdown Page](#lockdown-page).



## **Lockdown Page**

This will be the main page where a SINGLE BUTTON is all it takes to put your tablet device on "lockdown". After which, any external movements sensed by the built-in device gyroscope will send an alert to the mobile phone which was used to activate lockdown mode on the tablet. This movement will simulate possible events of:

*   Theft
*   Damage to the tablet&nbsp;

and you are able to stay informed, even if you are away from your tablet!

## Areas of Improvement

Our previous idea was to keep laptops safe as people tend to leave their laptops sitting on the table while they take short breaks (i.e. short trip to the toilet, purchase drinks). However, our progress was immediately stunted due to the absence of the movement sensor in laptops. We then had to implement it between mobile phones and tablets instead.

There is also a lack of security as the application window needs to remain open and others may be able to switch the alarm off on the tablet device.