const dnaToRna = new Map<string, string>([
    ['G', 'C'],
    ['C', 'G'],
    ['T', 'A'],
    ['A', 'U']
])

export function toRna(dna: string): string {
    let rna = '';

    Array.from(dna).forEach((nucleotide) => {
        if (!dnaToRna.has(nucleotide)) {
            throw new Error('Invalid input DNA.')
        }
        rna += dnaToRna.get(nucleotide)
    })

    return rna;
}
