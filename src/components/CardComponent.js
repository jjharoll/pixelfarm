// CardComponent.js
import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const CardComponent = ({ title }) => {
  return (
    <Card style={{ width: 200, margin: 16 }}>
      <CardContent>
        <Typography variant="h6" component="div">
          {title}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardComponent;
