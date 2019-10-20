module.exports = class AiGame {
    fileName = 'network.json';
    fs = require('fs');
    brain = require('brain.js');
    net;

    config = {
        binaryThresh: 0.5,
        hiddenLayers: [3],     // array of ints for the sizes of the hidden layers in the network
        activation: 'sigmoid',  // supported activation types: ['sigmoid', 'relu', 'leaky-relu', 'tanh'],
        leakyReluAlpha: 0.01,   // supported for activation type 'leaky-relu'
        iterations : 1000
    };
    
    constructor(){
        this.net = new this.brain.NeuralNetwork(this.config);
    }

    train(data) {
        this.net.train(data);
    }
    
    saveFile(data) {
        this.fs.writeFile(this.fileName, JSON.stringify(data), function(err) {
            if(err) {
                throw error;
            } else {
                console.log('Success');
            }
        });
    }

    runFromFile(path, value){
        this.fs.readFile(path, (error, data) => {
            if (error) {
                throw error; 
            }

            this.net.fromJSON(JSON.parse(data));
            let results = this.net.run(value);
            console.log(this.brain.likely(results, this.net));
        });
    }
}