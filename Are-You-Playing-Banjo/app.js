function areYouPlayingBanjo(name) {
    // Implement me
    const regex = /^r/i;
    if(name.match(regex)){
      return name + " plays banjo"
    }else{
      return name + " does not play banjo";
    }
  }