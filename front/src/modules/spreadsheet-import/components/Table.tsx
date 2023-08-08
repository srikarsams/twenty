import DataGrid, { DataGridProps } from 'react-data-grid';
import styled from '@emotion/styled';

import { rgba } from '@/ui/theme/constants/colors';

import { useRsi } from '../hooks/useRsi';

const StyledDataGrid = styled(DataGrid)`
  --rdg-background-color: ${({ theme }) => theme.background.primary};
  --rdg-border-color: ${({ theme }) => theme.border.color.medium};
  --rdg-color: ${({ theme }) => theme.font.color.primary};
  --rdg-error-cell-background-color: ${({ theme }) => theme.color.red};
  --rdg-font-size: ${({ theme }) => theme.font.size.sm};
  --rdg-frozen-cell-box-shadow: none;
  --rdg-header-background-color: ${({ theme }) => theme.accent.primary};
  --rdg-info-cell-background-color: ${({ theme }) => theme.color.blue};
  --rdg-row-hover-background-color: ${({ theme }) => theme.background.tertiary};
  --rdg-row-selected-background-color: ${({ theme }) => theme.accent.primary};
  --rdg-row-selected-hover-background-color: ${({ theme }) =>
    theme.background.quaternary};
  --rdg-selection-color: ${({ theme }) => theme.color.blue};
  --rdg-summary-border-color: ${({ theme }) => theme.border.color.medium};
  --rdg-warning-cell-background-color: ${({ theme }) => theme.color.orange};
  --row-selected-hover-background-color: ${({ theme }) =>
    rgba(theme.color.blue, 0.3)};

  block-size: 100%;
  border: 1px solid ${({ theme }) => theme.border.color.medium};
  border-radius: ${({ theme }) => theme.border.radius.md};

  .rdg-header-row .rdg-cell {
    color: ${({ theme }) => theme.font.color.primary};
    font-size: ${({ theme }) => theme.font.size.sm};
    font-weight: ${({ theme }) => theme.font.weight.medium};
    letter-spacing: wider;
    text-transform: uppercase;
    box-shadow: none;
    ${({ headerRowHeight }) => {
      if (headerRowHeight === 0) {
        return `
          border: none;
        `;
      }
    }};
  }

  .rdg-cell {
    border-bottom: 1px solid ${({ theme }) => theme.border.color.medium};
    border-inline-end: none;
    border-right: none;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    box-shadow: none;
  }

  .rdg-row:last-child > .rdg-cell {
    border-bottom: none;
  }

  .rdg-cell[aria-selected='true'] {
    outline: none;
  }

  .rdg-cell-error {
    background-color: ${({ theme }) => theme.color.red};
  }

  .rdg-cell-warning {
    background-color: ${({ theme }) => theme.color.orange};
  }

  .rdg-cell-info {
    background-color: ${({ theme }) => theme.color.blue};
  }

  .rdg-static {
    cursor: pointer;
  }

  .rdg-static .rdg-header-row {
    display: none;
  }

  .rdg-static .rdg-cell {
    --rdg-selection-color: none;
  }

  .rdg-example .rdg-cell {
    --rdg-selection-color: none;
    border-bottom: none;
  }

  .rdg-radio {
    align-items: center;
    display: flex;
  }

  .rdg-checkbox {
    --rdg-selection-color: none;
    align-items: center;
    display: flex;
  }
` as typeof DataGrid;

type Props<Data> = DataGridProps<Data> & {
  rowHeight?: number;
  hiddenHeader?: boolean;
};

export const Table = <Data,>(props: Props<Data>) => {
  const { rtl } = useRsi();

  return (
    <StyledDataGrid direction={rtl ? 'rtl' : 'ltr'} rowHeight={52} {...props} />
  );
};
