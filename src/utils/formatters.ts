export function formatLevel(level: string) {
  switch (level) {
  case 'beginner':
    return 'Iniciante';
  case 'intermediate':
    return 'Intermediário';
  case 'advanced':
    return 'Avançado';
  default:
    return 'Iniciante';
  }
}

export function formatDuration(duration: number) {
  const minutes = Math.floor(duration / 60000);
  const hours = Math.floor(minutes / 60);
  const minutesLeft = minutes % 60;

  if (hours > 0) {
    return `${hours}h ${minutesLeft}min`;
  } else {
    return `${minutesLeft}min`;
  }
}
