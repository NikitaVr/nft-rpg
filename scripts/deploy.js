const main = async () => {
  const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame', {
    gasLimit: 250000,
  });
  const gameContract = await gameContractFactory.deploy(
    ['Warrior', 'Ranger', 'Wizard'], // Names
    [
      'QmauputmcncaTV1BgsrGGyEBYKiN9FRaVhsKqubRaDixJW', // Images
      'QmdfkPtU9LiVS9gqDA8UGiTtXZw7dpoavv2QbJbqifJdKC',
      'QmTKjLvjSBS2UQNQRNGY4dj9YNEGCdv5QUXwmjtB1jQSUv',
    ],
    [300, 200, 100], // HP values
    [25, 50, 100], // Attack damage values
    {
      characterStrengthModifier: [4, 2, 0], // strength  values
      characterDexterityModifier: [2, 4, 0], // dexterity  values
      characterConstitutionModifier: [4, 2, 0], // constitution  values
      characterIntelligenceModifier: [0, 2, 4], // intelligence  values
      characterWisdomModifier: [2, 4, 2], // wisdom  values
      characterCharismaModifier: [1, 1, 1], // charisma  valuesz
    },
    'Illithid', // Boss name
    'QmNvxRMSRTVUoc1ivXXu5WLBjLRDMJAr2qQKFXMHaLXZY9', // Boss image
    10000, // Boss hp
    50 // Boss attack damage
  );
  await gameContract.deployed();
  console.log('Contract deployed to:', gameContract.address);

  // let txn;
  // // We only have three characters.
  // // an NFT w/ the character at index 2 of our array.
  // txn = await gameContract.mintCharacterNFT(2);
  // await txn.wait({gasLimit:300000});

  // txn = await gameContract.attackBoss();
  // await txn.wait({gasLimit:300000});

  // txn = await gameContract.attackBoss();
  // await txn.wait({gasLimit:300000});

  // txn = await gameContract.attackBoss();
  // await txn.wait({gasLimit:300000});

  // // Get the value of the NFT's URI.
  // let returnedTokenUri = await gameContract.tokenURI(1);
  // console.log("Token URI:", returnedTokenUri);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();
