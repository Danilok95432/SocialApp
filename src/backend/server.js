import express from 'express';
import { sizePage } from '../redux/usersReducer.js';
const app = express();

const users = [
    {
    id: 1,
    name: 'John Doe',
    photoUrl: {
        small: {source: 'https://w7.pngwing.com/pngs/758/485/png-transparent-computer-icons-male-woman-organization-flat-people-miscellaneous-face-cartoon.png', widthPhoto: 80, heightPhoto:80},
        big: {source: 'https://w7.pngwing.com/pngs/758/485/png-transparent-computer-icons-male-woman-organization-flat-people-miscellaneous-face-cartoon.png', widthPhoto: 80, heightPhoto:80}
    },
    followStatus: true
    },
    {
    id: 2,
    name: 'Joe Doe',
    photoUrl: {
        small: {source: 'https://www.kindpng.com/picc/m/780-7804962_cartoon-avatar-png-image-transparent-avatar-user-image.png', widthPhoto: 80, heightPhoto:80},
        big: {source: 'https://www.kindpng.com/picc/m/780-7804962_cartoon-avatar-png-image-transparent-avatar-user-image.png', widthPhoto: 80, heightPhoto:80}
    },
    followStatus: false
    },
    {
    id: 3,
    name: 'Nikita',
    photoUrl: {
        small: {source: 'https://www.clipartmax.com/png/middle/34-347774_avatar-juergen59-avatar.png', widthPhoto: 80, heightPhoto:80},
        big: {source: 'https://www.clipartmax.com/png/middle/34-347774_avatar-juergen59-avatar.png', widthPhoto: 80, heightPhoto:80}
    },
    followStatus: true
    },
    {
    id: 4,
    name: 'Dima',
    photoUrl: {
        small: {source: 'https://w7.pngwing.com/pngs/758/485/png-transparent-computer-icons-male-woman-organization-flat-people-miscellaneous-face-cartoon.png', widthPhoto: 80, heightPhoto:80},
        big: {source: 'https://w7.pngwing.com/pngs/758/485/png-transparent-computer-icons-male-woman-organization-flat-people-miscellaneous-face-cartoon.png', widthPhoto: 80, heightPhoto:80}
    },
    followStatus: true
    },
    {
    id: 5,
    name: 'Katya',
    photoUrl: {
        small: {source: 'https://www.kindpng.com/picc/m/780-7804962_cartoon-avatar-png-image-transparent-avatar-user-image.png', widthPhoto: 80, heightPhoto:80},
        big: {source: 'https://www.kindpng.com/picc/m/780-7804962_cartoon-avatar-png-image-transparent-avatar-user-image.png', widthPhoto: 80, heightPhoto:80}
    },
    followStatus: false
    },
    {
    id: 6,
    name: 'Danila',
    photoUrl: {
        small: {source: 'https://www.clipartmax.com/png/middle/34-347774_avatar-juergen59-avatar.png', widthPhoto: 80, heightPhoto:80},
        big: {source: 'https://www.clipartmax.com/png/middle/34-347774_avatar-juergen59-avatar.png', widthPhoto: 80, heightPhoto:80}
    },
    followStatus: true
    },
    {
    id: 7,
    name: 'Ilya',
    photoUrl: {
        small: {source: 'https://w7.pngwing.com/pngs/758/485/png-transparent-computer-icons-male-woman-organization-flat-people-miscellaneous-face-cartoon.png', widthPhoto: 80, heightPhoto:80},
        big: {source: 'https://w7.pngwing.com/pngs/758/485/png-transparent-computer-icons-male-woman-organization-flat-people-miscellaneous-face-cartoon.png', widthPhoto: 80, heightPhoto:80}
    },
    followStatus: true
    },
    {
    id: 8,
    name: 'Vitalik',
    photoUrl: {
        small: {source: 'https://www.kindpng.com/picc/m/780-7804962_cartoon-avatar-png-image-transparent-avatar-user-image.png', widthPhoto: 80, heightPhoto:80},
        big: {source: 'https://www.kindpng.com/picc/m/780-7804962_cartoon-avatar-png-image-transparent-avatar-user-image.png', widthPhoto: 80, heightPhoto:80}
    },
    followStatus: false
    },
    {
    id: 9,
    name: 'Vitya',
    photoUrl: {
        small: {source: 'https://www.clipartmax.com/png/middle/34-347774_avatar-juergen59-avatar.png', widthPhoto: 80, heightPhoto:80},
        big: {source: 'https://www.clipartmax.com/png/middle/34-347774_avatar-juergen59-avatar.png', widthPhoto: 80, heightPhoto:80}
    },
    followStatus: true
    }
]

app.get('/' , (req, res) =>{
    //serve react app
})

app.get('/api/users/:page', (req, res) =>{
    const {page} = req.params;
    const pageCount = Math.ceil(users.length / sizePage);
    res.json({
        users : users.slice(page * sizePage - sizePage, page * sizePage),
        pageCount : pageCount
    }
    )   
    })

app.get('/api/dialogs', (req, res) =>{
    res.send([
        {
            sender: 'Nikita', 
            content: 'Yo,how r u?', 
            time: '13:46', 
            notification: 'false', 
            id: 1 
        },
        {
            sender: 'Dima', 
            content: 'Please,call me...', 
            time: '2:46', notification: 'true', 
            id: 2
        },
        {
            sender: 'Sasha', 
            content: 'Dude, did u check this video? It is awesome...', 
            time: '10:46', 
            notification: 'false', 
            id: 3
        }
])
})

app.get('/api/messages', (req, res) =>{
    res.send([
        {
            sender: 'Danila', 
            content: '',
            text: '123', 
            time: '13:45', 
            id: '1'
        }
])
})

app.get('/api/posts', (req, res) =>{
    res.send([
        {
            content:'https://cdn-st3.rtr-vesti.ru/vh/pictures/hd/304/700/2.jpg', 
            text:'My first post', 
            creator:'Danila', 
            date:'20 March 2023'
        },
        {
            content:'https://vsegda-pomnim.com/uploads/posts/2022-02/1645922169_1-vsegda-pomnim-com-p-polyarnoe-siyanie-foto-1.jpg', 
            text:'Hello,world!', 
            creator:'Nikita', 
            date:'15 March 2023'
        }, 
        {
            content:'https://vsegda-pomnim.com/uploads/posts/2022-02/1645922158_3-vsegda-pomnim-com-p-polyarnoe-siyanie-foto-3.jpg', 
            text:'', 
            creator:'Sasha', 
            date:'13 March 2023'
        }
])
})

const port = process.env.PORT || 8080;
app.listen(port, () =>  console.log(`Listening the port ${port}`))