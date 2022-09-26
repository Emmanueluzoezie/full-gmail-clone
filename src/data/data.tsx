import InboxIcon from '@mui/icons-material/Inbox';
import StarIcon from '@mui/icons-material/Star';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import NoteIcon from '@mui/icons-material/Note';
import LabelIcon from '@mui/icons-material/Label';
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
import ChatIcon from '@mui/icons-material/Chat';
import AddIcon from '@mui/icons-material/Add';

import TextFormatIcon from '@mui/icons-material/TextFormat';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import AddToDriveIcon from '@mui/icons-material/AddToDrive';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import LockClockIcon from '@mui/icons-material/LockClock';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import MoreVertIcon from '@mui/icons-material/MoreVert';


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

export const moreLeftSideBarLink = [
    {
        name: "Important",
        icon: <LabelImportantIcon />
    },
    {
        name: "Chats",
        icon: <ChatIcon />
    },
    {
        name: "Scheduled",
        icon: <ScheduleSendIcon />
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
    {
        name: "Categories",
        icon: <LabelIcon />
    },
    {
        name: "Manage label",
        icon: <SettingsIcon />
    },
    {
        name: "Create new label",
        icon: <AddIcon />
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

export const checkInputItems = ["All", "None", "Read", "Unread", "Starred", "Unstarred"]

export const composeIcons = [
    <TextFormatIcon />,
    <AttachFileIcon />,
    <InsertLinkIcon />,
    <InsertEmoticonIcon />,
    <AddToDriveIcon />,
    <InsertPhotoIcon />,
    <LockClockIcon />,
    <ModeEditOutlineIcon />,
    <MoreVertIcon />
]