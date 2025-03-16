const createCopyButtonText = (ticketNumber: string) => `チケット番号「${ticketNumber}」をコピーする`;

export const setJiraTicketNumberCopyButton = () => {
  const breadcrumbsWrapper = document.querySelector('[data-component-selector="breadcrumbs-wrapper"] ol');

  if (!breadcrumbsWrapper) return;

  const ticketNumber = window.location.pathname.split('/').at(-1) ?? '';
  const copyButton = document.createElement('button');
  copyButton.textContent = createCopyButtonText(ticketNumber);
  copyButton.style.marginLeft = '10px'; // ボタンを少し右にずらす

  copyButton.addEventListener('click', () => {
    if (!ticketNumber) return;
    navigator.clipboard.writeText(ticketNumber);
    copyButton.textContent = `「${ticketNumber}」をコピーしました`;

    setTimeout(() => {
      copyButton.textContent = createCopyButtonText(ticketNumber);
    }, 3000);
  });

  breadcrumbsWrapper.appendChild(copyButton);
};
