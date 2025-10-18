import { registerDecorator, ValidationArguments, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";


@ValidatorConstraint({ name: 'match_between_fields', async: false })
export class MatchBetweenFields<T> implements ValidatorConstraintInterface {
  validate(value: T, args: ValidationArguments) {
    console.log({
      value,
      args,
      missMatch: args.constraints[0],
      missMatchValue: args.object[args.constraints[0]],
    });

    return value === args.object[args.constraints[0]];
  }

  defaultMessage(validationArguments?: ValidationArguments): string {
    return `Fail To Match Src Fields :: ${validationArguments?.property} With Target :: ${validationArguments?.constraints[0]}`;
  }
}

export function IsMatch<T>(
  constraints: string[],
  validationOptions?: ValidationOptions,
) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints,
      validator: MatchBetweenFields<T>,
    });
  };
}