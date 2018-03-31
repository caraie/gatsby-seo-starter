import * as React from "react"
import Link from "gatsby-link"
import * as kebabCase from "lodash/kebabCase"
import styled from "styled-components"
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';

const TagLine = styled.div`
  margin: 5px;
  margin-left: 0px;
`
const Tag = styled(Link)`
  margin: 5px;
  margin-left: 0;
`

export default ({ tags }) => (
  <TagLine>
    {tags.map(tag => {
      return (
        <Tag>
          <Button color="primary">
            <Typography variant="caption">
              <Link to={`/tags/${kebabCase(tag)}/`}>
                {tag}
              </Link>
            </Typography>
          </Button>
        </Tag>
      )
    })}
  </TagLine>
)