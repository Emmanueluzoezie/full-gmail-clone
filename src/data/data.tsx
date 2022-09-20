import InboxIcon from '@mui/icons-material/Inbox';
import StarIcon from '@mui/icons-material/Star';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import NoteIcon from '@mui/icons-material/Note';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import SendIcon from '@mui/icons-material/Send';
import ScheduleSendIcon from '@mui/icons-material/ScheduleSend';
import OutboxIcon from '@mui/icons-material/Outbox';
import MailIcon from '@mui/icons-material/Mail';
import ErrorIcon from '@mui/icons-material/Error';
import DeleteIcon from '@mui/icons-material/Delete';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

export const leftSideBarLink = [
    {
        name: "Inbox",
        icon: <InboxIcon />
    },
    {
        name: "Starred",
        icon: <StarIcon />
    },
    {
        name: "Snoozed",
        icon: <AccessTimeFilledIcon />
    },
    {
        name: "Sent",
        icon: <SendIcon />
    },
    {
        name: "Draft",
        icon: <NoteIcon />
    },
]

export const leftSideBarMobile = [
    {
        links:[
            {
                name: "All inboxes",
                icon: <InboxIcon />
            },
            {
                name: "Primary",
                icon: <StarIcon />
            },
            {
                name: "Social",
                icon: <AccessTimeFilledIcon />
            },
            {
                name: "Promotions",
                icon: <SendIcon />
            },
        ]
    },
    {
        title: "ALL LABELS",
        links: [
            {
                name: "Starred",
                icon: <StarIcon />
            },
            {
                name: "Snoozed",
                icon: <AccessTimeFilledIcon />
            },
            {
                name: "Important",
                icon: <LabelImportantIcon />
            },
            {
                name: "Sent",
                icon: <SendIcon />
            },
            {
                name: "Scheduled",
                icon: <ScheduleSendIcon />
            },
            {
                name: "Outbox",
                icon: <OutboxIcon />
            },
            {
                name: "Draft",
                icon: <NoteIcon />
            },
            {
                name: "All mails",
                icon: <MailIcon />
            },
            {
                name: "Spam",
                icon: <ErrorIcon />
            },
            {
                name: "Bin",
                icon: <DeleteIcon />
            },
        ]
    },
    {
        title: "GOOGLE APPS",
        links: [
            {
                name: "Calendar",
                icon: <CalendarMonthIcon />
            },
            {
                name: "Contacts",
                icon: <AccountCircleIcon />
            },
        ]
    }
]

export const moreSidebarLink = [
    {
        name: "Important",
        icon: <LabelImportantIcon />
    },
    {
        name: "Sent",
        icon: <SendIcon />
    },
    {
        name: "Scheduled",
        icon: <ScheduleSendIcon />
    },
    {
        name: "Outbox",
        icon: <OutboxIcon />
    },
    {
        name: "Draft",
        icon: <NoteIcon />
    },
    {
        name: "All mails",
        icon: <MailIcon />
    },
    {
        name: "Spam",
        icon: <ErrorIcon />
    },
    {
        name: "Bin",
        icon: <DeleteIcon />
    },
]

export const leftSidebarFooter = [
    {
        name: "Settings",
        icon: <SettingsIcon />
    },
    {
        name: "Help and Feedback",
        icon: <HelpOutlineIcon />
    }, 
]

export const rigtSideBarLink = [
    {   name: "Calendar",
        icon: <CalendarMonthIcon />
    },
    { 
        name: "Keep",
        icon: <LightbulbIcon />
    },
    { 
        name: "Tasks",
        icon: <TaskAltIcon />
    },
    { 
        name: "Contacts",
        icon: <AccountCircleIcon />
    }
]