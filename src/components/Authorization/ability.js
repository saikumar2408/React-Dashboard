import { AbilityBuilder } from '@casl/ability';

export let ability = AbilityBuilder.define(( can, cannot) => {
    // no accesses provided by default
});

export function ruleBuilder(user) {
    const { rules, can  } = AbilityBuilder.extract();

    if (user.privileges === 'admin') {
        //
    } else {
        can('view', 'profile');
        can('view', 'add-account');
        can('view', 'view-history');
        can('view', 'wallet');
        can('view', 'transactions');
        can('view', 'comments');
    }

    return rules;
}
