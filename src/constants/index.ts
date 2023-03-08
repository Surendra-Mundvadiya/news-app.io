// Generating All Constants for Sagas and Reducers.

let default_reducers = ["load", "success", "error", "unload", "set"];
let default_reducer_prefix = "REDUCERS";
let default_saga_prefix = "SAGAS";

function generateConsts(type: string): any {
    switch (type) {
        case "news":
            return {
                reducers: default_reducers,
                actions: ["getNewsPost"],
                name: "POST",
            };
    }
}

export type ConstantsType = {
    sagas: any;
    reducers: any;
};

export default function constants(type: string): ConstantsType {
    let consts: ConstantsType = {
        reducers: {},
        sagas: {},
    };

    let genConsts = generateConsts(type);

    for (let i in genConsts.actions) {
        if (!consts.sagas[genConsts.actions[i]]) {
            consts.sagas[genConsts.actions[i]] = {};
        }
        consts.sagas[genConsts.actions[i]] = `${type}/${default_saga_prefix}/${genConsts.actions[i]}`;
        for (let j in genConsts.reducers) {
            if (!consts.reducers[genConsts.actions[i]]) {
                consts.reducers[genConsts.actions[i]] = {};
            }
            consts.reducers[genConsts.actions[i]][genConsts.reducers[j]] = `${type}/${default_reducer_prefix}/${genConsts.actions[i]}/${genConsts.reducers[j]}`;
        }
    }

    return consts;
}
