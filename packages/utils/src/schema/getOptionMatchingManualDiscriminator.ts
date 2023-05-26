import get from 'lodash/get';
import { PROPERTIES_KEY } from '../constants';

export const getOptionMatchingManualDiscriminator = (
  discriminatorField: string | undefined,
  formData: any,
  options: object[]
): number | undefined | void => {
  if (!discriminatorField || !formData) {
    return;
  }

  const value = get(formData, discriminatorField);

  for (let i = 0; i < options.length; i++) {
    const option = options[i];
    const discriminator = get(option, [PROPERTIES_KEY, discriminatorField], {});

    if (discriminator?.enum?.includes(value)) {
      return i;
    }
  }
};
