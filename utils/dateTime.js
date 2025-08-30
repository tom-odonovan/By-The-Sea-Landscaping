import * as dateFns from 'date-fns';


/**
 * Format ISO date string into relative time string
 * @param {string} isoDateString - Iso 8601 date string
 * @return {string} - Time difference relative to the current date
 */

export const formatRelativeTime = (isoDateString) => {
  const date = dateFns.parseISO(isoDateString);
  return dateFns.formatDistanceToNow(date, { addSuffix: true });
};