// App base date - October 14th of current year
// All dates in the app should be relative to this date
export const getAppDate = () => {
  const currentYear = new Date().getFullYear();
  const appDate = new Date(currentYear, 9, 14); // October is month 9 (0-indexed)
  return appDate;
};

// Get the current date as the app sees it (always October 14th)
export const getCurrentAppDate = () => {
  return getAppDate();
};

// Get week number for a given date
export const getWeekNumber = (date) => {
  const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  const dayNum = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - dayNum);
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  return Math.ceil((((d - yearStart) / 86400000) + 1) / 7);
};

// Check if a date is October 14th (app base date)
export const isAppDate = (date) => {
  const appDate = getAppDate();
  return date.getDate() === appDate.getDate() && 
         date.getMonth() === appDate.getMonth() && 
         date.getFullYear() === appDate.getFullYear();
};

