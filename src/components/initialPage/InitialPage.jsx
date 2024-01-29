const InitialPage = () => {
  return (
    <>
      <div class="bg-black flex flex-col items-center justify-center h-[100vh] w-[100%]">
        <div class="z-40">
          <p class="font-bold text-nowrap text-[3rem] text-violet-900 mb-7">
            Defend The City with FlexBox
          </p>
          <p class="font-bold text-[2rem] text-center text-white">Welcome</p>
          <div class="flex items-center flex-col text-white mt-4">
            <div class="w-[40rem]">
              <p class="text-[1.3rem] text-justify">
                Defend your city and learn flexbox. Zombies have attacked your
                city and are trying to kill people. Stop them This game has 10
                stages and you have to help the game warrior to kill the zombies
                and save the city according to the instructions of the game
                guide. are you ready ?!
              </p>
            </div>
            <button class="bg-violet-900 text-white w-[41.5rem] py-4 rounded-xl text-xl font-bold mt-8 outline-none">
              Let's go
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default InitialPage;
