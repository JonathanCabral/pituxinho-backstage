import {
  ConfigContent,
  DevToolsLayout,
  ExternalDependenciesContent,
  InfoContent,
} from '@backstage/plugin-devtools';
import React from 'react';
import { EntityValidationContent } from '@backstage-community/plugin-entity-validation';
import { Typography } from '@mui/material';
import { CatalogUnprocessedEntitiesPage } from '@backstage/plugin-catalog-unprocessed-entities';

export default function CustomDevToolsPage() {
  return (
    <DevToolsLayout>
      <DevToolsLayout.Route path="info" title="Info">
        <InfoContent />
      </DevToolsLayout.Route>
      <DevToolsLayout.Route path="config" title="Config">
        <ConfigContent />
      </DevToolsLayout.Route>
      <DevToolsLayout.Route
        path="external-dependencies"
        title="External Dependencies"
      >
        <ExternalDependenciesContent />
      </DevToolsLayout.Route>
      <DevToolsLayout.Route
        path="/entity-validation"
        title="Entity Validation"
      >
        <EntityValidationContent contentHead={<Typography variant="h6">Entity Validation</Typography>}/>
      </DevToolsLayout.Route>
      <DevToolsLayout.Route path="unprocessed-entities" title="Unprocessed Entities">
        <CatalogUnprocessedEntitiesPage />
      </DevToolsLayout.Route>
    </DevToolsLayout>
  );
};