import {
    createBulbasaur,
    createCharmander,
    createBeedrill,
    createGyarados,
    createKakuna,
    createMagikarp,
    createStarmie,
    createStaryu,
    createWeedle,
    createIvysaur
} from "./cardFactory";


function deckFactorySomeName(){
    let array = [];

    array.push(createBulbasaur);
    array.push(createBulbasaur);
    array.push(createBulbasaur);
    array.push(createBulbasaur);

    array.push(createBeedrill);

    array.push(createGyarados);

    array.push(createIvysaur);
    array.push(createIvysaur);

    array.push(createKakuna);
    array.push(createKakuna);

    array.push(createMagikarp);
    array.push(createMagikarp);

    array.push(createStarmie);
    array.push(createStarmie);
    array.push(createStarmie);

    array.push(createStaryu);
    array.push(createStaryu);
    array.push(createStaryu);
    array.push(createStaryu);

    array.push(createWeedle);
    array.push(createWeedle);
    array.push(createWeedle);
    array.push(createWeedle);
}