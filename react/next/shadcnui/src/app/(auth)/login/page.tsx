'use client';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import GoogleIcon from '@/icons/google';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const FormSchema = z.object({
  email: z.string().email(),
});
export default function Page() {
  const router = useRouter();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: '',
    },
  });

  const onSubmit = (data: z.infer<typeof FormSchema>) => {
    console.log(data);
    router.push('/');
  };

  return (
    <div className="w-full min-h-screen flex">
      <div className="flex-auto w-full md:max-w-2xl bg-background flex flex-col items-center">
        <div className="w-full max-w-[30rem] p-6 flex flex-col justify-center flex-auto gap-8">
          <div className="w-1/3 h-10 bg-slate-50 text-foreground/20 leading-10 px-4 font-bold">
            LOGO
          </div>
          <div className="text-3xl font-bold">Sign Up or Log In</div>
          <div className="flex flex-col gap-6">
            <Button className="w-full" variant="outline">
              <GoogleIcon />
              Continue with Google
            </Button>
            <div className="flex items-center gap-4">
              <div className="flex-auto">
                <Separator />
              </div>
              <span className="flex-none text-sm">OR</span>
              <div className="flex-auto">
                <Separator />
              </div>
            </div>
            <Form {...form}>
              <form
                className="space-y-6"
                onSubmit={form.handleSubmit(onSubmit)}
              >
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>E-mail</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g. name@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div>
                  <Button className="w-full" type="submit">
                    Continue
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        </div>
        <div className="flex-none w-full max-w-[25rem] p-6">
          <div className="text-xs text-foreground/50 text-center">
            By signing up, you acknowledge that you have read and understood,
            and agree to our{' '}
            <a href="" className="text-blue-500">
              Terms
            </a>{' '}
            and{' '}
            <a href="" className="text-blue-500">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
      <div className="hidden md:block flex-auto w-full flex flex-col p-2">
        <div className="w-full h-full bg-violet-700 rounded-3xl relative overflow-hidden bg-[url('/bg.webp')] bg-cover" />
      </div>
    </div>
  );
}
