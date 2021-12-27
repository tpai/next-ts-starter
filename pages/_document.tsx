import { Helmet, HelmetData } from 'react-helmet';
import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document';

import browserEnv from '@/utils/browserEnv';

interface Props {
  helmet: HelmetData;
}

export default class MyDocument extends Document<Props> {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);

    return {
      ...initialProps,
      helmet: Helmet.renderStatic(),
    };
  }

  helmetHtmlAttrComponents = () => this.props.helmet.htmlAttributes.toComponent();

  helmetBodyAttrComponents = () => this.props.helmet.bodyAttributes.toComponent();

  renderHelmetHeadComponents = () =>
    Object.keys(this.props.helmet)
      .filter(el => el !== 'htmlAttributes' && el !== 'bodyAttributes')
      .map(el => this.props.helmet[el].toComponent());

  render() {
    return (
      <Html {...this.helmetHtmlAttrComponents()}>
        {this.renderHelmetHeadComponents()}
        <Head>
          <script
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: browserEnv,
            }}
          />
          <script src="https://www.google.com/recaptcha/api.js" async defer />
        </Head>
        <body {...this.helmetBodyAttrComponents()}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
