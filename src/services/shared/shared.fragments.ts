import { gql } from '@gql';

export const BATCH_ITEM_RESULT_FRAGMENT = gql(`
  fragment BatchItemResultFragment on BatchOperationResult {
    total
    failureCount
    successCount

    results {
      id
      data
      error {
        code
        details
        message
      }
      success
    }
  }
`);
