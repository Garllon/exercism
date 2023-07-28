const regExp = /[a-zA-Z]/g;

export function hey(message: string): string {
  message = message.trim();
  let silence = isSilence(message);

  if (silence) {
    return 'Fine. Be that way!';
  }

  let question = isQuestion(message);
  let shouting = isShouting(message);
  let letters = containsLetters(message);

  if (question && shouting && letters) {
    return "Calm down, I know what I'm doing!";
  } else if (question) {
    return 'Sure.';
  } else if (shouting && letters) {
    return 'Whoa, chill out!';
  }

  return 'Whatever.';
}

function isQuestion(message: string): boolean {
    return message.endsWith('?');
}

function isShouting(message: string): boolean {
    return message === message.toUpperCase();
}

function containsLetters(message: string): boolean {
    return message.match(regExp) !== null;
}

function isSilence(message: string): boolean {
    return message === '';
}
