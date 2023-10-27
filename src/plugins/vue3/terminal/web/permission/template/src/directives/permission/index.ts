import { type Directive } from 'vue';
import useUserStore from '@/store/userStore';

/**
 * 权限指令
 */
const permission: Directive = {
  mounted(el, binding) {
    const { value } = binding;
    const { getRoles } = useUserStore();

    if (value && value instanceof Array && value.length > 0) {
      const permissionRoles = value;
      const hasPermission = getRoles.some((role) =>
        permissionRoles.includes(role)
      );

      if (!hasPermission) {
        el.parentNode && el.parentNode.removeChild(el);
      }
    } else {
      throw new Error('need roles! Like v-permission="[\'admin\',\'editor\']"');
    }
  },
};

export default permission;
