// @flow
import { graphql, StaticQuery } from 'gatsby';
import React from 'react';

import Contacts from '../Contacts';
import Copyright from '../Copyright';
import DisplayIf from '../DisplayIf';

type Props = {
  +mobile?: boolean,
  +desktop?: boolean,
};

type PureProps = Props & {
  +data: Object,
};

export const PureMovableSidebarContent = ({
  mobile,
  desktop,
  data,
}: PureProps) => {
  const { author, copyright } = data.site.siteMetadata;
  return (
    <DisplayIf mobile={mobile} desktop={desktop}>
      <Contacts contacts={author.contacts} />
      <Copyright copyright={copyright} />
    </DisplayIf>
  );
};

export const MovableSidebarContent = (props: Props) => (
  <StaticQuery
    query={graphql`
      query MovableSidebarContentQuery {
        site {
          siteMetadata {
            author {
              contacts {
                github
                email
                codepen
                linkedin
              }
            }
            copyright
          }
        }
      }
    `}
    render={data => <PureMovableSidebarContent {...props} data={data} />}
  />
);

export default MovableSidebarContent;
