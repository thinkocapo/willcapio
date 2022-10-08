import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { Header } from 'components';
import { Layout, Container } from 'layouts';

const places = ['Slovakia', 'Austria', 'Netherlands']

const WhereIsWill = center => (
  <Layout>
    <Helmet title={'WhereIsWill'} />
    <Header title="Where Is Will">right here</Header>
    <Container left={center}>
      <h2>Travel Update</h2>
      <p>I spent 2019-2022 living in San Francisco, California then relocated to Vienna, Austria on April1st, 2022</p>
      <p>Here is a list of the places I've been</p>

      <table>
        <tr>
          <th>Place</th>
          <th>Date</th> 
        </tr>
        <tr>
          <td>tbd</td>
          <td>tbd</td> 
        </tr>
        <tr>
          <td>tbd</td>
          <td>tbd</td> 
        </tr>
      </table>

      <p><a href="https://github.com/thinkocapo">https://github.com/thinkocapo</a></p>
      <h2>Something</h2>

      <h2>Next</h2>
      <p>...paragraph...</p>

      {/* <h2 style={{ 'color': 'blue' }}>Books</h2> */}
      <br></br>
    </Container>
  </Layout>
);

export default WhereIsWill;

WhereIsWill.propTypes = {
  center: PropTypes.object,
};
