/**
*
* ProductMain
*
*/
import React, { memo } from 'react';
import { Container } from './styled';
import { useTranslation } from 'react-i18next';
import { messages } from './messages';

interface Props {}

export const PREFIXProductMain = memo((props: Props) => {
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { t, i18n } = useTranslation();

return (
  <Container>
    {t('')}
    {/* {t(...messages.someThing())} */}
  </Container>
);

});
