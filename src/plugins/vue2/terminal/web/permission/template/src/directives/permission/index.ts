import useUserStore from '@/store/userStore';

/**
 * 权限指令
 */
export default function inserted(
  el: HTMLElement,
  binding: { value?: Array<string> }
) {
  const { value } = binding;
  const { getRoles } = useUserStore();

  if (value && value.length > 0) {
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
}
