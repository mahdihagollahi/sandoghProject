import ImageDashboard from "@/app/assent/Img/adminPanel/dasboard.svg";
import ImageDashboardHover from "@/app/assent/Img/adminPanel/dashboardHover.svg";
import ImageMangment from "@/app/assent/Img/adminPanel/ProfileManger.svg";
import ImageMangmentHover from "@/app/assent/Img/adminPanel/profileMangerOn.svg";
import ImageUser from "@/app/assent/Img/adminPanel/User.svg";
import ImageUserHover from "@/app/assent/Img/adminPanel/UserHover.svg";
import ImageVam from "@/app/assent/Img/adminPanel/Vam.svg";
import ImageVamHover from "@/app/assent/Img/adminPanel/VamHover.svg";
import ImagePassword from "@/app/assent/Img/adminPanel/createUser.svg";
import ImagePasswordHover from "@/app/assent/Img/adminPanel/createUserOn.svg";
import ImageEconomi from "@/app/assent/Img/adminPanel/Economi.svg";
import ImageEconomiHover from "@/app/assent/Img/adminPanel/EconomiHover.svg";
import ImagePoshtibani from "@/app/assent/Img/adminPanel/Poshtibani.svg";
import ImagePoshtibaniHover from "@/app/assent/Img/adminPanel/PoshtibaniHover.svg";
import ImageMassege from "@/app/assent/Img/adminPanel/massege.svg";
import ImageMassegeHover from "@/app/assent/Img/adminPanel/massegeHover.svg";
import ImageSetting from "@/app/assent/Img/adminPanel/setting.svg";
import ImageSettingHover from "@/app/assent/Img/adminPanel/settingHover.svg";
import deleteUser from "@/app/assent/Img/adminPanel/DeletedUserNotHover.svg";
import deleteUserHover from "@/app/assent/Img/adminPanel/DeleteUser.svg";
import DashboardDark from "@/app/assent/Img/adminPanel/DashboardDark.svg";
import DashboardDarkHover from "@/app/assent/Img/adminPanel/DashboardDarkHover.svg";
import DarkImageUse from "@/app/assent/Img/adminPanel/DarkImageUser.svg";
import DarkImageUseHover from "@/app/assent/Img/adminPanel/DarkImageUseHover.svg";
import darkImageVam from "@/app/assent/Img/adminPanel/darkImageVam.svg";
import darkImageVamHover from "@/app/assent/Img/adminPanel/darkImageVamHover.svg";
import darkImagePassword from "@/app/assent/Img/adminPanel/darkImagePassword.svg";
import darkImagePasswordHover from "@/app/assent/Img/adminPanel/darkImagePasswordHover.svg";
import darkImageEconomi from "@/app/assent/Img/adminPanel/darkImageEconomi.svg";
import darkImageEconomiHover from "@/app/assent/Img/adminPanel/darkImageEconomiHover.svg";
import darkImageSetting from "@/app/assent/Img/adminPanel/darkImageSetting.svg";
import darkImageSettingHover from "@/app/assent/Img/adminPanel/darkImageSettingHover.svg";
import darkImagePoshtibani from "@/app/assent/Img/adminPanel/darkImagePoshtibani.svg";
import darkImagePoshtibaniHover from "@/app/assent/Img/adminPanel/darkImagePoshtibaniHover.svg";
import darkImageMassege from "@/app/assent/Img/adminPanel/darkImageMassege.svg";
import darkImageMassegeHover from "@/app/assent/Img/adminPanel/darkImageMassegeHover.svg";
import darkImageMangment from "@/app/assent/Img/adminPanel/darkImageMangment.svg";
import darkImageMangmentHover from "@/app/assent/Img/adminPanel/darkImageMangmentHover.svg";
import darkdeleteUser from "@/app/assent/Img/adminPanel/darkdeleteUser.svg";
import darkdeleteUserHover from "@/app/assent/Img/adminPanel/darkdeleteUserHover.svg";

function NavbarData() {
  return {
    Navbar: [
      {
        id: 1,
        src: ImageDashboard,
        hoverSrc: ImageDashboardHover,
        darkSrc: DashboardDark,
        darkhoverSrc: DashboardDarkHover,
        link: "/dashboard",
      },
      {
        id: 2,
        src: ImageUser,
        hoverSrc: ImageUserHover,
        darkSrc: DarkImageUse,
        darkhoverSrc: DarkImageUseHover,
        link: "/everyuser",
      },
      {
        id: 3,
        src: ImageVam,
        hoverSrc: ImageVamHover,
        darkSrc: darkImageVam,
        darkhoverSrc: darkImageVamHover,
        link: "/allloanaplication",
      },
      {
        id: 4,
        src: ImagePassword,
        hoverSrc: ImagePasswordHover,
        darkSrc: darkImagePassword,
        darkhoverSrc: darkImagePasswordHover,
        link: "/userpass",
      },
      {
        id: 5,
        src: ImageEconomi,
        hoverSrc: ImageEconomiHover,
        darkSrc: darkImageEconomi,
        darkhoverSrc: darkImageEconomiHover,
        link: "/showuserdetail",
      },
      {
        id: 6,
        src: ImageSetting,
        hoverSrc: ImageSettingHover,
        darkSrc: darkImageSetting,
        darkhoverSrc: darkImageSettingHover,
        link: "/ruleadmin",
      },
      {
        id: 7,
        src: ImagePoshtibani,
        hoverSrc: ImagePoshtibaniHover,
        darkSrc: darkImagePoshtibani,
        darkhoverSrc: darkImagePoshtibaniHover,
        link: "/support",
      },
      {
        id: 8,
        src: ImageMassege,
        hoverSrc: ImageMassegeHover,
        darkSrc: darkImageMassege,
        darkhoverSrc: darkImageMassegeHover,
        link: "/sentmessageadmin",
      },
      {
        id: 9,
        src: ImageMangment,
        hoverSrc: ImageMangmentHover,
        darkSrc: darkImageMangment,
        darkhoverSrc: darkImageMangmentHover,
        link: "/management",
      },
      {
        id: 10,
        src: deleteUser,
        hoverSrc: deleteUserHover,
        darkSrc: darkdeleteUser,
        darkhoverSrc: darkdeleteUserHover,
        link: "/userdeleteadmin",
      },
    ],
  };
}

export default NavbarData;
