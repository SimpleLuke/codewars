function DNAtoRNA(dna) {
    // create a function which returns an RNA sequence from the given DNA sequence
    const regex = /T/g;
    return dna.replace(regex,"U");
  }