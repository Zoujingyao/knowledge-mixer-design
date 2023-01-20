import React from 'react';
import { Form } from 'antd';
import renderer, { act } from 'react-test-renderer';
import { render, waitFor } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import PasswordItem, { defaultRules, failedStyle, succeededStyle } from './index';

// rulesIds 期待满足的规则下标
const rulesExpectToBeTruthy = async (rulesIds: number[], rules = defaultRules) => {
  for (const [idx, rule] of rules.entries()) {
    const circle = await waitFor(() => screen.getByText(new RegExp(rule.message))?.firstChild as HTMLElement | null);
    if (rulesIds.includes(idx)) {
      // 当前输入满足条件idx
      expect(circle?.style?.color).toBe(succeededStyle.color);
    } else {
      expect(circle?.style?.color).toBe(failedStyle.color);
    }
  }
};

describe('PasswordItem', () => {
  it('renders correctly when there is a single PasswordItem', () => {
    try {
      const ele = renderer.create(<PasswordItem />).toJSON();
      expect(ele).toMatchSnapshot();
    } catch (e) {
      console.log(e);
    }
  });

  it('renders correctly when there are multiple items in a Form', () => {
    const ele = renderer
      .create(
        <Form>
          <PasswordItem label="password" name="password" />
          <PasswordItem label="password2" name="newPassword" />
          <PasswordItem />
        </Form>,
      )
      .toJSON();
    expect(ele).toMatchSnapshot();
  });

  it('warns when input.value does not pass specific validation rules.', async () => {
    act(() => {
      render(
        <PasswordItem
          label="密码"
          inputProps={{
            defaultValue: 'abc',
            // @ts-ignore
            'data-testid': 'nut-password-form-item',
          }}
        />,
      );
    });
    const input = screen.getByTestId('nut-password-form-item');

    act(() => {
      input.focus();
    });

    // abc, 初始密码仅满足第三条规则，其他两条置灰
    await rulesExpectToBeTruthy([2]);

    // abcdef, 模拟用户输入满足第一、三条规则
    await userEvent.type(input, 'def');
    await rulesExpectToBeTruthy([0, 2]);

    // abcdef11,用户输入，直到满足全部规则
    await userEvent.type(input, '11');
    await rulesExpectToBeTruthy([0, 1, 2]);

    // abcdef, 模拟用户输入满足第一、三条规则
    await userEvent.type(input, '{backspace}{backspace}');
    await rulesExpectToBeTruthy([0, 2]);
  });

  it('the FormItem validation rules is the combination of rules in popover by default', async () => {
    act(() => {
      render(
        <Form
          initialValues={{
            password: 'abc',
          }}
        >
          <PasswordItem
            name={'password'}
            label="密码"
            inputProps={{
              // @ts-ignore
              'data-testid': 'testId',
            }}
          />
        </Form>,
      );
    });

    const input = screen.getByTestId('testId');

    act(() => {
      input.focus();
    });
    await userEvent.type(input, 'qwe');
    act(() => {
      input.blur();
    });

    // abcqwe, 校验不通过
    await waitFor(() => expect(screen.queryByText(/不符合密码规范/i)).toBeInTheDocument());

    act(() => {
      input.focus();
    });
    await userEvent.type(input, '123');
    act(() => {
      input.blur();
    });

    // abcqwe123, 校验通过
    await waitFor(() => expect(screen.queryByText(/不符合密码规范/i)).not.toBeInTheDocument());
  });

  it('works correctly with custom rules', async () => {
    const customRules = [
      ...defaultRules,
      {
        validator: (_: any, value: string | string[]) => {
          if (value.includes('gmm')) {
            return Promise.resolve();
          }
          return Promise.reject();
        },
        message: "包含'gmm'校验通过",
      },
    ];

    act(() => {
      render(
        <Form initialValues={{ password: 'abc123' }}>
          <PasswordItem
            name={'password'}
            label="密码"
            rulesForCheckList={customRules}
            inputProps={{
              // @ts-ignore
              'data-testid': 'testId',
            }}
          />
        </Form>,
      );
    });

    const input = screen.getByTestId('testId');
    act(() => {
      input.focus();
    });
    await rulesExpectToBeTruthy([0, 1, 2], customRules);
    act(() => {
      input.blur();
    });
    await waitFor(() => expect(screen.queryByText(/不符合密码规范/i)).toBeInTheDocument());
  });

  it('warns when pass an invalid rule & shows no error message', async () => {
    const mockedWarn = jest.spyOn(console, 'warn');
    mockedWarn.mockImplementation(() => undefined);

    const customRules = [{ validator: '', message: 'test wrong validator' } as any];

    act(() => {
      render(
        <Form initialValues={{ password: 'abc123' }}>
          <PasswordItem
            name={'password'}
            label="密码"
            rulesForCheckList={customRules}
            inputProps={{
              // @ts-ignore
              'data-testid': 'testId',
            }}
          />
        </Form>,
      );
    });

    const input = screen.getByTestId('testId');
    act(() => {
      input.focus();
    });

    await rulesExpectToBeTruthy([0], customRules);

    expect(screen.queryByText(/不符合密码规范/i)).not.toBeInTheDocument();

    expect(mockedWarn).toBeCalled();

    mockedWarn.mockRestore();
  });
});
