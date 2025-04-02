/**
 * @param {{
 *   recipient: string,
 *   subject: string,
 *   body: string
 * }} props
 * @returns {string}
 */
export const mailtoUrl = ({
  recipient: mailRecipient,
  subject: mailSubject,
  body: mailBody,
}) => {
  return `mailto:${mailRecipient}?subject=${encodeURIComponent(
    mailSubject
  )}&body=${encodeURIComponent(mailBody)}`;
};
