const { Client } = require('discord-rpc');



const clientId = '1288907333476417568';

const rpc = new Client({ transport: 'ipc' });



function connecterRPC() {

    rpc.login({ clientId }).catch((err) => {

        console.error('Échec de connexion à Discord RPC. Nouvelle tentative dans 5 secondes...', err);

        setTimeout(connecterRPC, 5000);

    });

}



rpc.on('ready', () => {

    console.log('Rich Presence actif !');



    rpc.setActivity({

        details: 'Projet ๖̶᱔May Cube',

        state: 'communauté...',

        largeImageKey: 'may',

        largeImageText: '๖̶᱔May Cube',

        smallImageKey: 'game',

        smallImageText: 'communauté',

        buttons: [

            { label: 'Discord Serveur', url: 'https://discord.gg/ryVNBAY5cm' }

        ]

    });

});



connecterRPC();



rpc.transport.on('close', () => {

    console.warn('Connexion Discord RPC fermée. Reconnexion...');

    connecterRPC();

});
