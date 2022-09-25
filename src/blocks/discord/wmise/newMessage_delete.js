import * as Blockly from "blockly/core";


const blockName = "s4d_newmsg_del";

const blockData = {
    "message0": "%{BKY_N_DEL}",
    "colour": "#4C97FF",
    "previousStatement": null,
    "nextStatement": null,
    "tooltip": "",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(){
    const code = `newMessage.delete()\n`;
    return code;
};
